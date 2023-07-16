using Domain.Entities;
using FluentValidation;

namespace Domain.Validator
{
    public class CargoValidator : AbstractValidator<Cargo>
    {
        public CargoValidator()
        {
            RuleFor(cargo => cargo.Nome).NotEmpty().WithMessage("O campo Nome é obrigatório.");
            RuleFor(cargo => cargo.Descricao).NotEmpty().WithMessage("O campo Descrição é obrigatório.");
        }
    }
}
