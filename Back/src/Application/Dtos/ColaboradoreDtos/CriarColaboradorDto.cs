namespace Application.Dtos.ColaboradoreDtos
{
    public sealed record CriarColaboradorDto(string Nome, string Telefone, bool Situacao, string Link) : BaseDto;
}
