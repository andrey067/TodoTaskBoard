using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AlterandoVinculoTarefaCard : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tarefas_Cards_CardId",
                table: "Tarefas");

            migrationBuilder.DropIndex(
                name: "IX_Tarefas_CardId",
                table: "Tarefas");

            migrationBuilder.DropColumn(
                name: "CardId",
                table: "Tarefas");

            migrationBuilder.AddColumn<long>(
                name: "TarefaId",
                table: "Cards",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Cards_TarefaId",
                table: "Cards",
                column: "TarefaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_Tarefas_TarefaId",
                table: "Cards",
                column: "TarefaId",
                principalTable: "Tarefas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_Tarefas_TarefaId",
                table: "Cards");

            migrationBuilder.DropIndex(
                name: "IX_Cards_TarefaId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "TarefaId",
                table: "Cards");

            migrationBuilder.AddColumn<long>(
                name: "CardId",
                table: "Tarefas",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Tarefas_CardId",
                table: "Tarefas",
                column: "CardId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tarefas_Cards_CardId",
                table: "Tarefas",
                column: "CardId",
                principalTable: "Cards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
