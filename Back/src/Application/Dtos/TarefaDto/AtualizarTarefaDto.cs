using Application.Dtos.CardDtos;

namespace Application.Dtos.TarefaDto
{
    public record AtualizarTarefaDto(long? Id, string Nome, List<AtualizarCardDto> Cards) : BaseDto(Id);
}
