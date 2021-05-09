using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Data.GenericRepository
{
    public class GenericRepository<TEntity> where TEntity : class
    {
        internal TestDbContext  context;
        internal DbSet<TEntity> dbSet;
        internal IMapper _mapper;

        public GenericRepository(TestDbContext  context)
        {
            this.context = context;
            this.dbSet = context.Set<TEntity>();
            this._mapper = null; //TODO: Ver si en todos los repositiorios agregar automapper.
        }

        #region CUDActions
        public virtual void Insert(TEntity entity)
        {
            dbSet.Add(entity);
        }
        public virtual void Update(TEntity entity, params string[] modifiedfields)
        {
            context.Entry<TEntity>(entity).State = EntityState.Unchanged;
            foreach (string var in modifiedfields)
            {
                context.Entry<TEntity>(entity).Property(var).IsModified = true;
            }
        }

        public virtual void Update(TEntity entity, List<string> modifiedfields)
        {
            context.Entry<TEntity>(entity).State = EntityState.Unchanged;
            foreach (string var in modifiedfields)
            {
                context.Entry<TEntity>(entity).Property(var).IsModified = true;
            }
        }
        public virtual void Delete(TEntity entity, List<string> modifiedfields)
        {
            this.Update(entity, modifiedfields);
        }

        public virtual void DeletePhysical(TEntity entity)
        {
            this.dbSet.Remove(entity);
        }


        public virtual void Insert(List<TEntity> entity)
        {
            dbSet.AddRange(entity);
        }
        public virtual void Update(List<TEntity> entities, params string[] modifiedfields)
        {
            foreach (TEntity entity in entities)
            {
                context.Entry<TEntity>(entity).State = EntityState.Unchanged;
                foreach (string var in modifiedfields)
                {
                    context.Entry<TEntity>(entity).Property(var).IsModified = true;
                }
            }
        }

        public virtual void Update(List<TEntity> entities, List<string> modifiedfields)
        {
            foreach (TEntity entity in entities)
            {
                context.Entry<TEntity>(entity).State = EntityState.Unchanged;
                foreach (string var in modifiedfields)
                {
                    context.Entry<TEntity>(entity).Property(var).IsModified = true;
                }
            }
        }
        public virtual void Delete(List<TEntity> entities, List<string> modifiedfields)
        {
            foreach (TEntity entity in entities)
            {
                this.Update(entity, modifiedfields);
            }
        }

        public virtual void DeletePhysical(List<TEntity> entities)
        {
            this.dbSet.RemoveRange(entities);
        }



        #endregion

        #region ReadOneActions
        public virtual TEntity GetById(Int64 ID)
        {
            return dbSet.Find(ID);
        }

        public virtual TEntity GetOneByFilters(Expression<Func<TEntity, bool>> where, params string[] include)
        {
            IQueryable<TEntity> query = this.dbSet.AsNoTracking();
            if (include != null)
                query = include.Aggregate(query, (current, inc) => current.Include(inc)).AsNoTracking();
            if (where != null)
                query = query.Where(where).AsNoTracking();
            return query.FirstOrDefault<TEntity>();
        }
        #endregion

        #region ReadAllActions
        public virtual IQueryable<TEntity> GetAll()
        {
            IQueryable<TEntity> query = dbSet.AsNoTracking();
            return query;
        }

        public virtual IQueryable<TEntity> GetAllByFilters(Expression<Func<TEntity, bool>> where, params string[] include)
        {
            //var a = context.PeatonUsers.ToList();
            IQueryable<TEntity> query = this.dbSet.AsNoTracking();
            if (include != null)
                query = include.Aggregate(query, (current, inc) => current.Include(inc)).AsNoTracking();
            if (where != null)
                query = query.Where(where).AsNoTracking();
            return query;
            //return dbSet.Where(where).AsQueryable();
        }
        #endregion




    }
}
