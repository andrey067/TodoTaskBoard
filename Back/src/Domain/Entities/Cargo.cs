using Api.Domain.Entities;
using Domain.Shared.Interfaces;
using Domain.Validator;

namespace Domain.Entities
{
    public class Cargo : BaseEntity, IValidar
    {
        public string Nome { get; private set; }
        public string Descricao { get; private set; }
        public bool Situacao { get; private set; }

        public Cargo(string nome, string descricao, bool situacao)
        {
            Nome = nome;
            Descricao = descricao;
            Situacao = situacao;
        }

        public void AtualizarCargo(string nome, string descricao, bool situacao)
        {
            Nome = nome;
            Descricao = descricao;
            Situacao = situacao;
        }

        public void Validar()
        {
            Validate(new CargoValidator(), this);
        }
    }
}
