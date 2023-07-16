using Application.Interfaces;

namespace Application.Dtos.ColaboradoreDtos
{
    public sealed record AtualizarColaboradorDto(long? Id, string Nome, string Telefone, bool Situacao, string Link) : BaseDto(Id);
}
