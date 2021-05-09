using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Services.Interfaces
{
    public interface ITaskServices
    {
        void Create(TaskBE taskBE);
        void Update(TaskBE taskbE);
        List<TaskProfileDto> GetAll();
        void Delete(int ID);
        TaskProfileDto GetById(int ID);
        List<TaskProfileDto> GetAllByName(string name);

    }
}
