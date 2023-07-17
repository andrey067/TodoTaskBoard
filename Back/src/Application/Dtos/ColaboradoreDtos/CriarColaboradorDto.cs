namespace Application.Dtos.ColaboradoreDtos
{
    public sealed record CriarColaboradorDto(string Nome, string Telefone, bool Situacao,long cargoId, string Link) : BaseDto;
}
