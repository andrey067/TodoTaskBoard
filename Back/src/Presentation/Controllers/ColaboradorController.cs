using Application.Dtos.ColaboradoreDtos;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ColaboradorController : BaseController<Colaborador, ColaboradorResultDto>
    {
        private readonly IColaboradorService _colaboradorService;

        public ColaboradorController(IBaseService<Colaborador, ColaboradorResultDto> baseService, IColaboradorService colaboradorService) : base(baseService)
          => _colaboradorService = colaboradorService;


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CriarColaboradorDto colaboradorDto)
        {
            var result = await _colaboradorService.CriarColaborador(colaboradorDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] AtualizarColaboradorDto colaboradorDto)
        {
            var result = await _colaboradorService.AtualizarColaborador(colaboradorDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }
    }
}
