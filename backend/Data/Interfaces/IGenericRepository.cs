using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Data.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        #region CUDActions
        void Insert(TEntity entity);

        void Update(TEntity entity, params string[] modifiedfields);
        void Update(TEntity entity, List<string> modifiedfields);
        void Delete(TEntity entity, List<string> modifiedfields);
        void DeletePhysical(TEntity entity);


        void Insert(List<TEntity> entity);

        void Update(List<TEntity> entities, params string[] modifiedfields);
        void Update(List<TEntity> entities, List<string> modifiedfields);
        void Delete(List<TEntity> entities, List<string> modifiedfields);

        void DeletePhysical(List<TEntity> entities);



        #endregion

        #region ReadOneActions
        TEntity GetById(Int64 ID);
        #endregion
        TEntity GetOneByFilters(Expression<Func<TEntity, bool>> where, params string[] include);

        IQueryable<TEntity> GetAll();
        IQueryable<TEntity> GetAllByFilters(Expression<Func<TEntity, bool>> where, params string[] include);

    }
}
