using AutoMapper;
using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using Data.Models;

namespace API.Mapper
{
    public class MapperConfig: Profile
    {
        public MapperConfig()
        {
            CreateMap<CitizenBE, Citizen>();
            CreateMap<TaskBE, Task>();
            CreateMap<Task, TaskProfileDto>();
            CreateMap<Citizen, CitizenProfileDto>().ReverseMap();
            CreateMap<Citizen, CitizenRelDto>().ReverseMap();
            CreateMap<CitizenTask, CitizenTasksBE>().ReverseMap();
            CreateMap<CitizenTask, CitizenTaskDto>().ReverseMap()
                .ForMember(
                    dto => dto.Task,
                    opt => opt.MapFrom(src => src.Task)
                );
        }
    }
}
