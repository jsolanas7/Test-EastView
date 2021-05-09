using Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class TestDbContext : DbContext
    {


        public TestDbContext()
        {

        }


        public TestDbContext(DbContextOptions<TestDbContext> options) : base(options)
        {

        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        }

        #region DbSet
        public virtual DbSet<Task> Task { get; set; }
        public virtual DbSet<Citizen> Citizen { get; set; }
        public virtual DbSet<CitizenTask> CitizenTask { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CitizenTask>()
       .HasKey(c => new { c.CitizenId, c.TaskId});

            modelBuilder.Entity<Task>()
                .HasMany(c => c.CitizenTasks);

            modelBuilder.Entity<Citizen>()
                .HasMany(c => c.CitizenTasks);

        }
    }
}
