using Data.GenericRepository;
using Data.Interfaces;
using Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Repositories
{
    public class CitizenRepository : GenericRepository<Citizen>, ICitizenRepository
    {
        public CitizenRepository(TestDbContext context) : base(context)
        {
        }

    }
}
