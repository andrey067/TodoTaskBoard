using Domain.Entities;
using FluentValidation;

namespace Domain.Validator
{
    public class CardValidator : AbstractValidator<Card>
    {
        public CardValidator()
        {
            RuleFor(card => card.Nome).NotEmpty().WithMessage("O campo Nome é obrigatório.");
            RuleFor(card => card.Posicao).GreaterThanOrEqualTo(0).WithMessage("A Posição deve ser um valor não negativo.");
            RuleFor(card => card.Cor).NotEmpty().WithMessage("O campo Cor é obrigatório.");
            RuleFor(card => card.Atividade).NotEmpty().WithMessage("O campo Atividade é obrigatório.");
        }
    }
}
