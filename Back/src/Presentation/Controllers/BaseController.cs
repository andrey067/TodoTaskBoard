using Api.Domain.Entities;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    public abstract class BaseController<TEntity, TResult> : ControllerBase
     where TEntity : BaseEntity
     where TResult : BaseDto
    {
        private readonly IBaseService<TEntity, TResult> _baseService;

        protected BaseController(IBaseService<TEntity, TResult> baseService)
        {
            _baseService = baseService;
        }

        [HttpGet("obtertodos")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _baseService.SelectAllAsync();

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpGet("obterporId")]
        public async Task<IActionResult> Get([FromQuery] long Id)
        {
            var result = await _baseService.SelectAsync(Id);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] long Id)
        {
            var result = await _baseService.DeleteAsync(Id);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }
    }
}
