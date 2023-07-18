using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class CriandoSeedTarefaCard : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            SeedTarefaCard(migrationBuilder);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tarefas");

            migrationBuilder.DropTable(
               name: "Cards");
        }

        private void SeedTarefaCard(MigrationBuilder migrationBuilder)
        {
            for (int i = 1; i <= 5; i++)
            {
                var tarefa = new Tarefa($"Tarefa {i}");
                migrationBuilder.InsertData(
                    table: "Tarefas",
                    columns: new[] { "Nome" },
                    values: new object[] { tarefa.Nome });

                for (int j = 1; j <= 5; j++)
                {
                    var card = new Card($"Card{j}", j, "Cor do Card", "Atividade do Card", i);
                    migrationBuilder.InsertData(
                        table: "Cards",
                        columns: new[] { "Nome", "Posicao", "Cor", "Atividade", "TarefaId" },
                        values: new object[] { card.Nome, card.Posicao, card.Cor, card.Atividade, card.TarefaId });
                }
            }
        }
    }
}
