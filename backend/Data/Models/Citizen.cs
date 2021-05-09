using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class Citizen
    {

        public Citizen()
        {
            CitizenTasks = new HashSet<CitizenTask>();
        }


        public Int64 ID { get; set; }
        public int DNI { get; set; }
        public string firstName { get; set; }
        public string surName { get; set; }

        public virtual ICollection<CitizenTask> CitizenTasks { get; set; }

    }

}
