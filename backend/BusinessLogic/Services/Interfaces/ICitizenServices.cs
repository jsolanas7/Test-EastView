using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Services.Interfaces
{
    public interface ICitizenServices
    {
        void Create(CitizenBE citizenBE);
        void Update(CitizenBE citizenBE);
        List<CitizenRelDto> GetAll(String Child);
        void Delete(int ID);
        CitizenRelDto GetById(int ID);
        void CreateCTBE(CitizenTaskListBE citizenTaskBE);

    }
}
