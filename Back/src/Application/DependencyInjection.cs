using Application.Interfaces;
using Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddAplication(this IServiceCollection services)
        {
            services.AddScoped(typeof(IBaseService<,>), typeof(BaseService<,>));
            services.AddScoped<IColaboradorService, ColaboradorService>();
            services.AddScoped<ICardService, CardService>();
            services.AddScoped<ICargoService, CargoService>();
            services.AddScoped<ITarefaService, TarefaService>();

            return services;
        }
    }
}
