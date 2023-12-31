﻿using Application.Dtos.TarefaDto;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TarefaController : BaseController<Tarefa, TarefaResultDto>
    {
        private readonly ITarefaService _tarefaService;

        public TarefaController(IBaseService<Tarefa, TarefaResultDto> baseService, ITarefaService tarefaService)
            : base(baseService)
        {
            _tarefaService = tarefaService;
        }

        [HttpGet("obtertarefas-cards")]
        public async Task<IActionResult> ObterTarefasECards()
        {
            var result = await _tarefaService.ObterTarefasECards();

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CriarTarefaDto tarefaDto)
        {
            var result = await _tarefaService.CriarTarefa(tarefaDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] AtualizarTarefaDto tarefaDto)
        {
            var result = await _tarefaService.AtualizarTarefa(tarefaDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }

        [HttpPatch]
        public async Task<IActionResult> Patch([FromBody] AtualizarTarefaDto tarefaDto)
        {
            var result = await _tarefaService.AtualizarNomeTarefa(tarefaDto);

            return result.IsSuccess ? Ok(result) : BadRequest(result.Errors);
        }
    }
}
