using Api.Domain.Entities;
using Application.Dtos;
using Application.Interfaces;
using Domain.Repository;
using Domain.Shared;
using Mapster;

namespace Application.Services
{
    public class BaseService<TEntity, TResult> : IBaseService<TEntity, TResult>
        where TEntity : BaseEntity
        where TResult : BaseDto
    {
        private readonly IRepository<TEntity> _repositorio;

        public BaseService(IRepository<TEntity> repositorio)
         => _repositorio = repositorio;

        public async Task<Result> DeleteAsync(long id)
        {
            var existe = await _repositorio.ExistAsync(id);
            if (existe)
            {
                await _repositorio.DeleteAsync(id);
                return Result.Success();
            }

            return Result.Failure();
        }

        public async Task<Result<TResult>> SelectAsync(long id)
        {
            var colaborador = await _repositorio.SelectAsync(id);

            if (colaborador is not null)
                return Result<TResult>.Success(colaborador.Adapt<TResult>());

            return Result<TResult>.Success();
        }

        public async Task<Result<IEnumerable<TResult>>> SelectAllAsync()
        {
            var result = await _repositorio.SelectAllAsync();

            if (result.Count() > 0)
                return Result<IEnumerable<TResult>>.Success(result.Adapt<IEnumerable<TResult>>());

            return Result<IEnumerable<TResult>>.Success();
        }
    }
}
