using Domain.Repository;
using Infrastructure.Context;
using Infrastructure.Repositories;
using Mapster;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            var assembly = typeof(DependencyInjection).Assembly;

            //Para fins de desenvolvimento a Connection String esta explicita
            services.AddDbContext<TaskBoardContext>(options =>
            options.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=TaskBoardDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"));

            services.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));

            TypeAdapterConfig.GlobalSettings.Scan(assembly);
            return services;
        }
        public static async Task AplicarMigracoes(this IServiceProvider services)
        {
            using (var serviceScope = services.CreateScope())
            using (var context = serviceScope.ServiceProvider.GetService<TaskBoardContext>())
            {
                if (context!.Database.GetPendingMigrations().Any())
                    await context.Database.MigrateAsync();
            }
        }
    }
}
