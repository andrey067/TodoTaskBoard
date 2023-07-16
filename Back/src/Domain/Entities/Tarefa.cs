using Api.Domain.Entities;
using Domain.Shared.Interfaces;
using Domain.Validator;

namespace Domain.Entities
{
    public class Tarefa : BaseEntity , IValidar
    {
        public string Nome { get; private set; }
        public long CardId { get; set; }
        public virtual Card Card { get; private set; }

        public Tarefa(string nome, long cardId)
        {
            Nome = nome;
            CardId = cardId;
        }

        public void AtualizarTarefa(string nome, long cardId)
        {
            Nome = nome;
            CardId = cardId;
        }

        public void Validar()
        {
            Validate(new TarefaValidator(), this);
        }
    }
}
