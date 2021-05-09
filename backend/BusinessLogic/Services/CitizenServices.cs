using AutoMapper;
using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using BusinessLogic.Services.Interfaces;
using Data.Models;
using Data.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace BusinessLogic.Services
{
    public class CitizenServices: ICitizenServices
    {
        private readonly IUnitOfWork _unitofwork;
        private readonly IMapper _mapper;
        public CitizenServices(IUnitOfWork unitofwork, IMapper mapper)
        {
            _unitofwork = unitofwork;
            _mapper = mapper;
        }


        public void Create(CitizenBE citizenBE)
        {
            Citizen citizen = _mapper.Map<Citizen>(citizenBE);
            foreach(CitizenTask citizenTask in citizen.CitizenTasks)
            {
                citizenTask.Citizen = citizen;
            }
            _unitofwork.CitizenRepository.Insert(citizen);
            _unitofwork.Commit();
        }

        public void CreateCTBE(CitizenTaskListBE citizenTaskBE)
        {
            List<CitizenTask> citizenTasks = new List<CitizenTask>();
            foreach(Int64 TaskID in citizenTaskBE.TaskIds)
            {
                CitizenTask citizenTask = new CitizenTask()
                {
                    CitizenId = citizenTaskBE.CitizenID,
                    TaskId = TaskID
                };
                citizenTasks.Add(citizenTask);
            }
            _unitofwork.CitizenTaskRepository.Insert(citizenTasks);
            _unitofwork.Commit();
        }

        public void Update(CitizenBE citizenBE)
        {
            Citizen citizen = _mapper.Map<Citizen>(citizenBE);

            List<CitizenTask> citizenTasksBD = _mapper.Map<List<CitizenTask>>(_unitofwork.CitizenTaskRepository.GetAllByFilters(x => x.CitizenId == citizenBE.ID));
            foreach(CitizenTask citizenTask in citizenTasksBD)
            {
                if (!citizen.CitizenTasks.Any(x => x.TaskId == citizenTask.TaskId))
                    _unitofwork.CitizenTaskRepository.DeletePhysical(citizenTask);
            }
            foreach(CitizenTask citizenTask in citizen.CitizenTasks)
            {
                if (!citizenTasksBD.Any(x => x.TaskId == citizenTask.TaskId))
                    _unitofwork.CitizenTaskRepository.Insert(citizenTask);
            }
            string[] modifierFields = { "DNI", "firstName", "surName"};
            _unitofwork.CitizenRepository.Update(citizen, modifierFields);
            _unitofwork.Commit();
        }

        public List<CitizenRelDto> GetAll(String Child)
        {
            string[] childs = { Child };
            var result = _unitofwork.CitizenRepository.GetAllByFilters(null, childs);
            return _mapper.Map<List<CitizenRelDto>>(result);
        }

        public void Delete(int ID)
        {
            Citizen citizen = _unitofwork.CitizenRepository.GetById(ID);
            _unitofwork.CitizenRepository.DeletePhysical(citizen);
            _unitofwork.Commit();
        }


        public CitizenRelDto GetById(int ID)
        {
            string[] includes = { "CitizenTasks.Task" };
            return _mapper.Map<CitizenRelDto>(_unitofwork.CitizenRepository.GetOneByFilters(x=> x.ID == ID, includes));
        }

    }
}
