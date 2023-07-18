using Api.Domain.Entities;
using Domain.Shared.Interfaces;
using Domain.Validator;

namespace Domain.Entities
{
    public class Card : BaseEntity, IValidar
    {
        public string Nome { get; private set; }
        public int Posicao { get; private set; }
        public string Cor { get; private set; }
        public string Atividade { get; private set; }
        public long TarefaId { get; private set; }
        public virtual Tarefa Tafera { get; private set; }

        public Card(string nome, int posicao, string cor, string atividade, long tarefaId)
        {
            Nome = nome;
            Posicao = posicao;
            Cor = cor;
            Atividade = atividade;
            TarefaId = tarefaId;
        }

        public void AtualizarCard(string nome, int posicao, string cor, string atividade)
        {
            Nome = nome;
            Posicao = posicao;
            Cor = cor;
            Atividade = atividade;
        }

        public void Validar()
            => Validate(new CardValidator(), this);
    }
}
