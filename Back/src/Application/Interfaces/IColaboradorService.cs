using Application.Dtos.ColaboradoreDtos;
using Domain.Shared;

namespace Application.Interfaces
{
    public interface IColaboradorService
    {
        Task<Result> AtualizarColaborador(AtualizarColaboradorDto colaboradorDto);
        Task<Result> CriarColaborador(CriarColaboradorDto colaboradorDto);
    }
}
