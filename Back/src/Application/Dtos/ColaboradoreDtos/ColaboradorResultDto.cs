namespace Application.Dtos.ColaboradoreDtos
{
    public record ColaboradorResultDto(long? Id, DateTime? CreateAt, DateTime? UpdateAt, string Nome, string Telefone, bool Situacao, string Link) : BaseDto(Id, CreateAt, UpdateAt);
}
