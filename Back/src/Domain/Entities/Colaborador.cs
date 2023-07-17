using Api.Domain.Entities;
using Domain.Shared.Interfaces;
using Domain.Validator;

namespace Domain.Entities
{
    public class Colaborador: BaseEntity, IValidar
    {
        public string Nome { get; private set; }
        public string Telefone { get; private set; }
        public bool Situacao { get; private set; }
        public long CargoId { get; private set; }
        public string Link { get; private set; }
        public virtual Cargo Cargo { get; private set; }

        public Colaborador(string nome, string telefone, bool situacao, long cargoId, string link)
        {
            Nome = nome;
            Telefone = telefone;
            Situacao = situacao;
            CargoId = cargoId;
            Link = link;
        }

        public void AtualizarColaborador(string nome, string telefone, bool situacao, long cargoId,  string link)
        {
            Nome = nome;
            Telefone = telefone;
            Situacao = situacao;
            CargoId = cargoId;
            Link = link;
        }

        public void Validar()
        {
            Validate(new ColaboradorValidator(), this);
        }
    }
}
