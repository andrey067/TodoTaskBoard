namespace Application.Dtos.CargoDtos
{
    public sealed record AtualizarCargoDto(long? Id, string Nome, string Descricao, bool Situacao) : BaseDto(Id);
}
