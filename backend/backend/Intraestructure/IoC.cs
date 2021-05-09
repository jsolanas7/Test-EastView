using API.Security;
using BusinessLogic.Services;
using BusinessLogic.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Intraestructure
{
    public static class IoC
    {
        public static IServiceCollection AddDependency(this IServiceCollection services)
        {
            services.AddTransient<ICitizenServices, CitizenServices>();
            services.AddTransient<ITaskServices, TaskServices>();
            services.AddTransient<IJwtService, JwtService>();


            return services;
        }
    }
}
