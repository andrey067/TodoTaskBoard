namespace Application.Dtos.TarefaDto
{
    public sealed record CriarTarefaDto(string Nome, long CardId) : BaseDto;
}
