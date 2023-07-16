namespace Application.Dtos.CargoDtos
{
    public record CargoResultDto(long? Id, DateTime? CreateAt, DateTime? UpdateAt, string Nome, string Descricao, bool Situacao) : BaseDto(Id, CreateAt, UpdateAt);
}
