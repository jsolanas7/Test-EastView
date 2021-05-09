using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class TaskController : ControllerBase
    {
        private ITaskServices _taskServices;

        public TaskController(ITaskServices taskServices)
        {
            _taskServices = taskServices;
        }


        [HttpGet]
        public ActionResult<List<TaskProfileDto>> Get(int ID)
        {
            return Ok(_taskServices.GetById(ID));
        }


        [HttpGet]
        [Route("GetAll")]
        public ActionResult<List<TaskProfileDto>> Get()
        {
            return Ok(_taskServices.GetAll());
        }


      


        [HttpPut]
        [Route("Update")]
        public ActionResult Update(TaskBE taskBE)
        {
            _taskServices.Update(taskBE);
            return Ok();
        }



        [HttpPost]
        [Route("Insert")]
        public ActionResult Insert(TaskBE taskBE)
        {
            _taskServices.Create(taskBE);
            return Ok();
        }

        [HttpGet]
        [Route("GetByName")]
        public ActionResult<List<TaskProfileDto>> GetByName(string name)
        {
            return _taskServices.GetAllByName(name);
        }



        [HttpDelete]
        public ActionResult Delete(int ID)
        {
            _taskServices.Delete(ID);
            return Ok();
        }
    }
}
