namespace Application.Dtos.CardDtos
{
    public record CardResultDto(long? Id, DateTime? CreateAt, DateTime? UpdateAt, string Nome, int Posicao, string Cor, string Atividade, long tarefaId) : BaseDto(Id, CreateAt, UpdateAt);
}
