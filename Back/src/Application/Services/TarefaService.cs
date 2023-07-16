using Application.Dtos.TarefaDto;
using Application.Interfaces;
using Domain.Entities;
using Domain.Repository;
using Domain.Shared;

namespace Application.Services
{
    public class TarefaService : ITarefaService
    {
        private readonly IRepository<Tarefa> _repositorio;

        public TarefaService(IRepository<Tarefa> repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<Result> AtualizarTarefa(AtualizarTarefaDto tarefa)
        {
            var tarefaExiste = await _repositorio.ExistAsync((long)tarefa.Id);

            if (!tarefaExiste)
                return Result.Failure();

            var (tarefaAtualizada, heValido) = await Atualizar(tarefa);

            return heValido ? Result.Success() : Result.Failure(tarefaAtualizada.Errors.ToArray());
        }

        private async Task<(Tarefa tarefa, bool heValido)> Atualizar(AtualizarTarefaDto tarefa)
        {
            var tarefaEntidade = await _repositorio.SelectAsync((long)tarefa.Id);

            tarefaEntidade.AtualizarTarefa(tarefa.Nome, tarefa.CardId);
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
            var novaTarefa = new Tarefa(tarefa.Nome, tarefa.CardId);
            novaTarefa.Validar();

            return (novaTarefa, novaTarefa.IsValid);
        }
    }
}
