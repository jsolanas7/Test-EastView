using Data.GenericRepository;
using Data.Interfaces;
using Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Repositories
{
    public class CitizenTaskRepository : GenericRepository<CitizenTask>, ICitizenTaskRepository
    {
        public CitizenTaskRepository(TestDbContext context) : base(context)
        {
        }

    }
}
