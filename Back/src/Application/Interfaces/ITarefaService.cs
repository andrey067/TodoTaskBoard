using Application.Dtos.TarefaDto;
using Domain.Shared;

namespace Application.Interfaces
{
    public interface ITarefaService
    {    
        Task<Result> AtualizarTarefa(AtualizarTarefaDto tarefa);
        Task<Result> AtualizarNomeTarefa(AtualizarTarefaDto tarefa);
        Task<Result> CriarTarefa(CriarTarefaDto tarefa);
        Task<Result<IEnumerable<TarefaResultDto>>> ObterTarefasECards();
    }
}
