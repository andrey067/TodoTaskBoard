using Application.Dtos.CardDtos;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardController : BaseController<Card, CardResultDto>
    {
        private readonly ICardService _cardService;

        public CardController(IBaseService<Card, CardResultDto> baseService, ICardService cardService)
            : base(baseService)
        {
            _cardService = cardService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CriarCardDto cardDto)
        {
            var result = await _cardService.CriarCard(cardDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] AtualizarCardDto cardDto)
        {
            var result = await _cardService.AtualizarCard(cardDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }
    }
}
