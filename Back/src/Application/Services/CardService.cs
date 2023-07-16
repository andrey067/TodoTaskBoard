using Application.Dtos.CardDtos;
using Application.Interfaces;
using Domain.Entities;
using Domain.Repository;
using Domain.Shared;

namespace Application.Services
{
    public class CardService : ICardService
    {
        private readonly IRepository<Card> _repositorio;

        public CardService(IRepository<Card> repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<Result> AtualizarCard(AtualizarCardDto card)
        {
            var cardExiste = await _repositorio.ExistAsync((long)card.Id);

            if (!cardExiste)
                return Result.Failure();

            var (cardAtualizado, heValido) = await Atualizar(card);

            return heValido ? Result.Success() : Result.Failure(cardAtualizado.Errors.ToArray());
        }

        private async Task<(Card card, bool heValido)> Atualizar(AtualizarCardDto card)
        {
            var cardEntidade = await _repositorio.SelectAsync((long)card.Id);

            cardEntidade.AtualizarCard(card.Nome, card.Posicao, card.Cor, card.Atividade);
            cardEntidade.Validar();

            return (cardEntidade, cardEntidade.IsValid);
        }

        public async Task<Result> CriarCard(CriarCardDto card)
        {
            var (novoCard, heValido) = CriarEValidarCard(card);
            if (!heValido)
                return Result.Failure(novoCard.Errors.ToArray());

            await _repositorio.InsertAsync(novoCard);

            return Result.Success();
        }

        private (Card card, bool heValido) CriarEValidarCard(CriarCardDto card)
        {
            var novoCard = new Card(card.Nome, card.Posicao, card.Cor, card.Atividade);
            novoCard.Validar();

            return (novoCard, novoCard.IsValid);
        }
    }
}
