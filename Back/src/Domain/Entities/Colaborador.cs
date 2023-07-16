using Api.Domain.Entities;
using Domain.Shared.Interfaces;
using Domain.Validator;

namespace Domain.Entities
{
    public class Colaborador : BaseEntity, IValidar
    {
        public string Nome { get; private set; }
        public string Telefone { get; private set; }
        public bool Situacao { get; private set; }
        public string Link { get; private set; }

        public Colaborador(string nome, string telefone, bool situacao, string link)
        {
            Nome = nome;
            Telefone = telefone;
            Situacao = situacao;
            Link = link;            
        }

        public void AtualizarColaborador(string nome, string telefone, bool situacao, string link)
        {
            Nome = nome;
            Telefone = telefone;
            Situacao = situacao;
            Link = link;
        }

        public void Validar()
        {
            Validate(new ColaboradorValidator(), this);
        }
    }
}
