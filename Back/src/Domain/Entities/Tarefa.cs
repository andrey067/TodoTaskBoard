using Api.Domain.Entities;
using Domain.Shared.Interfaces;
using Domain.Validator;

namespace Domain.Entities
{
    public class Tarefa : BaseEntity, IValidar
    {
        public string Nome { get; private set; }
        public List<Card> Cards { get; private set; }        

        public Tarefa(string nome)
        {
            Nome = nome;
            Cards = new();
        }

        public void AtualizarNomeTarefa(string nome)
            => Nome = nome;

        public void RemoverCards()
            => Cards.Clear();

        public void AdicionarCard(Card card)
            => Cards.Add(card);

        public void Validar()
        => Validate(new TarefaValidator(), this);
    }
}
