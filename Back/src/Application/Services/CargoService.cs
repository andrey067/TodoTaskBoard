using Application.Dtos.CargoDtos;
using Application.Interfaces;
using Domain.Entities;
using Domain.Repository;
using Domain.Shared;

namespace Application.Services
{
    public class CargoService : ICargoService
    {
        private readonly IRepository<Cargo> _repositorio;

        public CargoService(IRepository<Cargo> repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<Result> AtualizarCargo(AtualizarCargoDto cargo)
        {
            var cargoExiste = await _repositorio.ExistAsync((long)cargo.Id);

            if (!cargoExiste)
                return Result.Failure();

            var (cargoAtualizado, heValido) = await Atualizar(cargo);

            return heValido ? Result.Success() : Result.Failure(cargoAtualizado.Errors.ToArray());
        }

        private async Task<(Cargo cargo, bool heValido)> Atualizar(AtualizarCargoDto cargo)
        {
            var cargoEntidade = await _repositorio.SelectAsync((long)cargo.Id);

            cargoEntidade.AtualizarCargo(cargo.Nome, cargo.Descricao, cargo.Situacao);
            cargoEntidade.Validar();

            return (cargoEntidade, cargoEntidade.IsValid);
        }

        public async Task<Result> CriarCargo(CriarCargoDto cargo)
        {
            var (novoCargo, heValido) = CriarEValidarCargo(cargo);
            if (!heValido)
                return Result.Failure(novoCargo.Errors.ToArray());

            await _repositorio.InsertAsync(novoCargo);

            return Result.Success();
        }

        private (Cargo cargo, bool heValido) CriarEValidarCargo(CriarCargoDto cargo)
        {
            var novoCargo = new Cargo(cargo.Nome, cargo.Descricao, cargo.Situacao);
            novoCargo.Validar();

            return (novoCargo, novoCargo.IsValid);
        }
    }
}
