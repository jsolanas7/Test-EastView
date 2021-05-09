using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Security;
using BusinessEntities.Entities;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private static readonly User[] Users = new[]
       {
            new User()
            {
                UserName = "cachavacha",
                Password = "test",
                Role = "bruja"
            },
            new User()
            {
                UserName = "usuario",
                Password = "test",
                Role = "usuario"
            }
        };

        private IJwtService _jwtService;

        public LoginController(IJwtService jwtService)
        {
            _jwtService = jwtService;

        }

        [HttpPost]
        public ActionResult<LoginSucessBE> Login(LoginBE loginBE)
        {
            //No llegue con el tiempo a hacer los servicios y repositoriso del login, queda todo escrito aca
            User user = Users.Where(x => x.UserName.ToLower() == loginBE.UserName.ToLower()).FirstOrDefault();
            if (user == null || user.Password.ToLower() != loginBE.Password.ToLower())
                return Unauthorized();
            LoginSucessBE loginSucessBE = new LoginSucessBE()
            {
                UserName = loginBE.UserName,
                Token = _jwtService.GenerateSecurityToken(user.UserName, user.Role)
            };
            return Ok(loginSucessBE);
        }

        [HttpGet]
        [Authorize(Roles = "bruja")]
        public ActionResult<Boolean> ValidateRole()
        {
            return Ok(true);
        }

        [HttpGet]
        [Route("validateToken")]
        [Authorize]
        public ActionResult<Boolean> ValidateToken()
        {
            return Ok(true);
        }
    }
}
