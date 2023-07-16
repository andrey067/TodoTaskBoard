namespace Application.Dtos.TarefaDto
{
    public record AtualizarTarefaDto(long? Id, string Nome, long CardId) : BaseDto(Id);
}
