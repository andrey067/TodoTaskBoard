namespace Application.Dtos.CargoDtos
{
    public sealed record CriarCargoDto(string Nome, string Descricao, bool Situacao) : BaseDto;
}
