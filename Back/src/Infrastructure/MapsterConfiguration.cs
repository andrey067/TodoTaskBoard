using Application.Dtos.ColaboradoreDtos;
using Domain.Entities;
using Mapster;

namespace Infrastructure
{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<ColaboradorResultDto, Colaborador>();
        }
    }
}
