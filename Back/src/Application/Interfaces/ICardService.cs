using Application.Dtos.CardDtos;
using Domain.Shared;

namespace Application.Interfaces
{
    public interface ICardService
    {
        Task<Result> AtualizarCard(AtualizarCardDto card);
        Task<Result> CriarCard(CriarCardDto card);
    }
}
