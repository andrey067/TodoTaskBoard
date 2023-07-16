namespace Application.Dtos.CardDtos
{
    public sealed record AtualizarCardDto(long? Id, string Nome, int Posicao, string Cor, string Atividade) : BaseDto(Id);

}
