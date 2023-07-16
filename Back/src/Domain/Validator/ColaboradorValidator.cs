using Domain.Entities;
using FluentValidation;

namespace Domain.Validator
{
    public class ColaboradorValidator : AbstractValidator<Colaborador>
    {
        public ColaboradorValidator()
        {
            RuleFor(colaborador => colaborador.Nome)
                .NotEmpty().WithMessage("O nome do colaborador é obrigatório.")
                .MaximumLength(100).WithMessage("O nome do colaborador deve ter no máximo 100 caracteres.");

            RuleFor(colaborador => colaborador.Telefone)
                .NotEmpty().WithMessage("O telefone do colaborador é obrigatório.")
                .MaximumLength(20).WithMessage("O telefone do colaborador deve ter no máximo 20 caracteres.");

            RuleFor(colaborador => colaborador.Link)
                .NotEmpty().WithMessage("O link do colaborador é obrigatório.")
                .MaximumLength(200).WithMessage("O link do colaborador deve ter no máximo 200 caracteres.");
        }
    }
}
