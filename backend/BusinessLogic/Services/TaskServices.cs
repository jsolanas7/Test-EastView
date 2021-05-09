using AutoMapper;
using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using BusinessLogic.Services.Interfaces;
using Data.Models;
using Data.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Services
{
    public class TaskServices: ITaskServices
    {
        private readonly IUnitOfWork _unitofwork;
        private readonly IMapper _mapper;
        public TaskServices(IUnitOfWork unitofwork, IMapper mapper)
        {
            _unitofwork = unitofwork;
            _mapper = mapper;
        }

        public void Create(TaskBE taskBE)
        {
            Task task = _mapper.Map<Task>(taskBE);
            _unitofwork.TaskRepository.Insert(task);
            _unitofwork.Commit();
        }

        public void Update(TaskBE taskbE)
        {
            Task task = _mapper.Map<Task>(taskbE);
            string[] modifierFields = { "Date", "Name", "Description" };

            _unitofwork.TaskRepository.Update(task, modifierFields);
            _unitofwork.Commit();
        }

        public List<TaskProfileDto> GetAll()
        {
            return _mapper.Map<List<TaskProfileDto>>(_unitofwork.TaskRepository.GetAll());
        }


        public List<TaskProfileDto> GetAllByName(string name)
        {
            return _mapper.Map<List<TaskProfileDto>>(_unitofwork.TaskRepository.GetAllByFilters(x => x.Name.ToLower().Contains(name ?? "")));
        }
        public void Delete(int ID)
        {
            Task task = _unitofwork.TaskRepository.GetById(ID);
            _unitofwork.TaskRepository.DeletePhysical(task);
            _unitofwork.Commit();
        }


        public TaskProfileDto GetById(int ID)
        {
            return _mapper.Map<TaskProfileDto>(_unitofwork.TaskRepository.GetById(ID));
        }
    }
}
