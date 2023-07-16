namespace Application.Dtos.CardDtos
{
    public sealed record CriarCardDto(string Nome, int Posicao, string Cor, string Atividade) : BaseDto;
}
