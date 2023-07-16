using Application.Dtos.CargoDtos;
using Domain.Shared;

namespace Application.Interfaces
{
    public interface ICargoService
    {
        Task<Result> AtualizarCargo(AtualizarCargoDto cargo);
        Task<Result> CriarCargo(CriarCargoDto cargo);
    }
}
