using Data.GenericRepository;
using Data.Interfaces;
using Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private TestDbContext context = null;
        public UnitOfWork()
        {
            context = new TestDbContext();
        }



        public TestDbContext GetNewContext()
        {
            return new TestDbContext();
        }

        public GenericRepository<T> getRepository<T>() where T : class
        {
            return new GenericRepository<T>(context);
        }

        public void Commit()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposed)
        {
            if (!this.disposed)
            {
                if (disposed)
                {
                    context.Dispose();
                }
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public TestDbContext GetContext()
        {
            return this.context;
        }



        #region Repositories
   

        private ICitizenRepository _citizenRepository;
        public ICitizenRepository CitizenRepository
        {
            get
            {
                if (_citizenRepository == null)
                    _citizenRepository = new CitizenRepository(context);
                return _citizenRepository;
            }
            set
            {
                _citizenRepository = value;
            }
        }

        private ITaskRepository _taskRepository;
        public ITaskRepository TaskRepository
        {
            get
            {
                if (_taskRepository == null)
                    _taskRepository = new TaskRepository(context);
                return _taskRepository;
            }
            set
            {
                _taskRepository = value;
            }
        }

        private ICitizenTaskRepository _citizenTaskRepository;
        public ICitizenTaskRepository CitizenTaskRepository
        {
            get
            {
                if (_citizenTaskRepository == null)
                    _citizenTaskRepository = new CitizenTaskRepository(context);
                return _citizenTaskRepository;
            }
            set
            {
                _citizenTaskRepository = value;
            }
        }
        #endregion
    }
}
