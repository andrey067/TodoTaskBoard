using Application.Dtos.CargoDtos;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CargoController : BaseController<Cargo, CargoResultDto>
    {
        private readonly ICargoService _cargoService;

        public CargoController(IBaseService<Cargo, CargoResultDto> baseService, ICargoService cargoService)
            : base(baseService)
        {
            _cargoService = cargoService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CriarCargoDto cargoDto)
        {
            var result = await _cargoService.CriarCargo(cargoDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] AtualizarCargoDto cargoDto)
        {
            var result = await _cargoService.AtualizarCargo(cargoDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }
    }
}
