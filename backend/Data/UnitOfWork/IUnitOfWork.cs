using Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.UnitOfWork
{
    public interface IUnitOfWork
    {

        void Commit();
        TestDbContext  GetNewContext();

        TestDbContext  GetContext();
        ICitizenRepository CitizenRepository { get; }
        ITaskRepository TaskRepository { get; }
        ICitizenTaskRepository CitizenTaskRepository { get; }

    }
}
