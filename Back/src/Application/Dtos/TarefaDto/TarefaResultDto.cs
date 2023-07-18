using Application.Dtos.CardDtos;

namespace Application.Dtos.TarefaDto
{
    public record TarefaResultDto(long? Id, DateTime? CreateAt, DateTime? UpdateAt, string Nome, long CardId, IEnumerable<CardResultDto> Cards) : BaseDto(Id, CreateAt, UpdateAt);
}
