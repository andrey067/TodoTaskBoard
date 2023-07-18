using Domain.Entities;
using FluentValidation;

namespace Domain.Validator
{
    public class TarefaValidator : AbstractValidator<Tarefa>
    {
        public TarefaValidator()
        {
            RuleFor(tarefa => tarefa.Nome).NotEmpty().WithMessage("O campo Nome é obrigatório.");           
        }
    }
}
