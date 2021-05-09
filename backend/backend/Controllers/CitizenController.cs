using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessEntities.Dtos;
using BusinessEntities.Entities;
using BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitizenController : ControllerBase
    {
        private ICitizenServices _citizenServices;

        public CitizenController(ICitizenServices citizenServices)
        {
            _citizenServices = citizenServices;
        }


        [HttpGet]
        public ActionResult<List<CitizenRelDto>> Get(int ID)
        {
            return Ok(_citizenServices.GetById(ID));
        }


        [HttpGet]
        [Route("GetAll")]
        public ActionResult<List<CitizenRelDto>> Get(string Child)
        {
            return Ok(_citizenServices.GetAll(Child));
        }




        [HttpPut]
        [Route("Update")]
        public ActionResult Update(CitizenBE citizenBE)
        {
            _citizenServices.Update(citizenBE);
            return Ok();
        }



        [HttpPost]
        public ActionResult Insert(CitizenBE citizenBE)
        {
            _citizenServices.Create(citizenBE);
            return Ok();
        }

        [HttpPost]
        [Route("InsertCT")]
        public ActionResult InsertCT(CitizenTaskListBE citizenTaskBE)
        {
            _citizenServices.CreateCTBE(citizenTaskBE);
            return Ok();
        }



        [HttpDelete]
        public ActionResult Delete(int ID)
        {
            _citizenServices.Delete(ID);
            return Ok();
        }
    }
}
