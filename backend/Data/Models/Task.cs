using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class Task
    {

        //public Task()
        //{
        //    CitizenTasks = new HashSet<CitizenTask>();
        //}
        public Int64 ID { get; set; }
        public string Date { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<CitizenTask> CitizenTasks { get; set; }
    }
}
