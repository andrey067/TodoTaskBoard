namespace Application.Dtos.TarefaDto
{
    public record TarefaResultDto(long? Id, DateTime? CreateAt, DateTime? UpdateAt, string Nome, long CardId) : BaseDto(Id, CreateAt, UpdateAt);
}
