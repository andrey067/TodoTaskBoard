using Application.Dtos.ColaboradoreDtos;
using Application.Interfaces;
using Domain.Entities;
using Domain.Repository;
using Domain.Shared;

namespace Application.Services
{
    public class ColaboradorService: IColaboradorService
    {
        private readonly IRepository<Colaborador> _repositorio;

        public ColaboradorService(IRepository<Colaborador> repositorio)
            => _repositorio = repositorio;

        public async Task<Result> AtualizarColaborador(AtualizarColaboradorDto colaboradorDto)
        {
            var colaboradorExiste = await _repositorio.ExistAsync((long)colaboradorDto.Id);

            if (colaboradorExiste == false)
                return Result.Failure();

            var (colaborador, heValido) = await AtualizarEntidade(colaboradorDto);

            if (heValido)
                await _repositorio.UpdateAsync(colaborador);

            return heValido ? Result.Success() : Result.Failure(colaborador.Errors.ToArray());
        }

        private async Task<(Colaborador colaborador, bool heValido)> AtualizarEntidade(AtualizarColaboradorDto colaboradorDto)
        {
            var colaboradorEntidade = await _repositorio.SelectAsync((long)colaboradorDto.Id);

            colaboradorEntidade.AtualizarColaborador(colaboradorDto.Nome, colaboradorDto.Telefone, colaboradorDto.Situacao, colaboradorDto.CargoId, colaboradorDto.Link);
            colaboradorEntidade.Validar();
            return (colaboradorEntidade, colaboradorEntidade.IsValid);
        }

        public async Task<Result> CriarColaborador(CriarColaboradorDto colaboradorDto)
        {
            var (colaborador, heValido) = CriarEValidarColaborador(colaboradorDto);
            if (!heValido)
                return Result.Failure(colaborador.Errors.ToArray());

            await _repositorio.InsertAsync(colaborador);

            return Result.Success();
        }

        private (Colaborador colaborador, bool heValido) CriarEValidarColaborador(CriarColaboradorDto colaboradorDto)
        {
            var colaborador = new Colaborador(colaboradorDto.Nome, colaboradorDto.Telefone, colaboradorDto.Situacao, colaboradorDto.cargoId, colaboradorDto.Link);
            colaborador.Validar();
            return (colaborador, colaborador.IsValid);
        }
    }
}
