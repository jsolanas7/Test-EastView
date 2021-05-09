using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Security
{
    public interface IJwtService
    {
        string GenerateSecurityToken(string email, string role);

    }
}
