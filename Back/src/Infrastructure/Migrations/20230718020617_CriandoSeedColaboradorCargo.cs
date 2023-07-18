using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class CriandoSeedColaboradorCargo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            SeedColaboradorCargo(migrationBuilder);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
              name: "Colaboradores");

            migrationBuilder.DropTable(
                name: "Cargos");
        }

        private void SeedColaboradorCargo(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Cargos",
                columns: new[] { "Nome", "Descricao", "Situacao", "CreateAt", "UpdateAt" },
                values: new object[,]
                {
                    { "Cargo 1", "Descrição do Cargo 1", true, DateTime.Now, DateTime.Now },
                    { "Cargo 2", "Descrição do Cargo 2", true, DateTime.Now, DateTime.Now },
                    { "Cargo 3", "Descrição do Cargo 3", true, DateTime.Now, DateTime.Now },
                    { "Cargo 4", "Descrição do Cargo 4", true, DateTime.Now, DateTime.Now },
                    { "Cargo 5", "Descrição do Cargo 5", true, DateTime.Now, DateTime.Now }
                });

            migrationBuilder.InsertData(
                table: "Colaboradores",
                columns: new[] { "Nome", "Telefone", "Situacao", "CargoId", "Link", "CreateAt", "UpdateAt" },
                values: new object[,]
                {
                    { "Colaborador 1", "111111111", true, 1, "Link 1", DateTime.Now, DateTime.Now },
                    { "Colaborador 2", "222222222", true, 2, "Link 2", DateTime.Now, DateTime.Now },
                    { "Colaborador 3", "333333333", true, 3, "Link 3", DateTime.Now, DateTime.Now },
                    { "Colaborador 4", "444444444", true, 4, "Link 4", DateTime.Now, DateTime.Now },
                    { "Colaborador 5", "555555555", true, 5, "Link 5", DateTime.Now, DateTime.Now }
                });
        }
    }
}
