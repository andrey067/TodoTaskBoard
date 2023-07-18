using Application.Dtos.TarefaDto;
using Application.Interfaces;
using Domain.Entities;
using Domain.Repository;
using Domain.Shared;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace Application.Services
{
    public class TarefaService: ITarefaService
    {
        private readonly IRepository<Tarefa> _repositorio;

        public TarefaService(IRepository<Tarefa> repositorio)
            => _repositorio = repositorio;

        public async Task<Result> AtualizarTarefa(AtualizarTarefaDto tarefa)
        {
            var tarefaExiste = await _repositorio.ExistAsync((long)tarefa.Id);

            if (!tarefaExiste)
                return Result.Failure();

            var (tarefaAtualizada, heValido) = await AtualizarEntidade(tarefa);

            if (heValido)
                await _repositorio.UpdateAsync(tarefaAtualizada);

            return heValido ? Result.Success() : Result.Failure(tarefaAtualizada.Errors.ToArray());
        }

        public async Task<Result<IEnumerable<TarefaResultDto>>> ObterTarefasECards()
        {
            var tarefas = await _repositorio.GetDbSet().Include(t => t.Cards).ToListAsync();
            return Result<IEnumerable<TarefaResultDto>>.Success(tarefas.Adapt<IEnumerable<TarefaResultDto>>());
        }

        private async Task<(Tarefa tarefa, bool heValido)> AtualizarEntidade(AtualizarTarefaDto tarefa)
        {
            var tarefaEntidade = await _repositorio.SelectAsync((long)tarefa.Id);

            tarefaEntidade.AtualizarNomeTarefa(tarefa.Nome);
            tarefaEntidade.RemoverCards();
            tarefa.Cards.ForEach(card =>
            {
                tarefaEntidade.RemoverCards();
                var novoCard = new Card(card.Nome, card.Posicao, card.Cor, card.Atividade, card.tarefaId);
                novoCard.Validar();
                if (novoCard.IsValid)
                    tarefaEntidade.AdicionarCard(novoCard);
            });
            tarefaEntidade.Validar();

            return (tarefaEntidade, tarefaEntidade.IsValid);
        }

        public async Task<Result> CriarTarefa(CriarTarefaDto tarefa)
        {
            var (novaTarefa, heValido) = CriarEValidarTarefa(tarefa);
            if (!heValido)
                return Result.Failure(novaTarefa.Errors.ToArray());

            await _repositorio.InsertAsync(novaTarefa);

            return Result.Success();
        }

        private (Tarefa tarefa, bool heValido) CriarEValidarTarefa(CriarTarefaDto tarefa)
        {
            var novaTarefa = new Tarefa(tarefa.Nome);
            novaTarefa.Validar();

            return (novaTarefa, novaTarefa.IsValid);
        }

        public async Task<Result> AtualizarNomeTarefa(AtualizarTarefaDto tarefa)
        {
            var tarefaEntidade = await _repositorio.SelectAsync((long)tarefa.Id);

            tarefaEntidade.AtualizarNomeTarefa(tarefa.Nome);
            tarefaEntidade.Validar();
            if (tarefaEntidade.IsValid)
                return Result.Failure(tarefaEntidade.Errors.ToArray());

            await _repositorio.UpdateAsync(tarefaEntidade);
            return tarefaEntidade.IsValid ? Result.Success() : Result.Failure(tarefaEntidade.Errors.ToArray());
        }
    }
}
