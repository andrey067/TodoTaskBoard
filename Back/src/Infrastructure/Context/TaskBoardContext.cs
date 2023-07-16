using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Context
{
    public class TaskBoardContext : DbContext
    {
        public TaskBoardContext() { }
        public virtual DbSet<Colaborador> Colaboradores { get; set; }
        public virtual DbSet<Cargo> Cargos { get; set; }
        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<Tarefa> Tarefas { get; set; }

        public TaskBoardContext(DbContextOptions<TaskBoardContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=TaskBoardDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");

            base.OnConfiguring(optionsBuilder);
        }
    }
}
