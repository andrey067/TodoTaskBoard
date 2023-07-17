using Domain.Entities;
using FluentValidation;

namespace Domain.Validator
{
    public class TarefaValidator : AbstractValidator<Tarefa>
    {
        public TarefaValidator()
        {
            RuleFor(tarefa => tarefa.Nome).NotEmpty().WithMessage("O campo Nome é obrigatório.");
            RuleFor(tarefa => tarefa.Id)
               .NotEmpty().GreaterThan(0)
               .WithMessage("O campo CardId é obrigatório.");
        }
    }
}
