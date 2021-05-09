using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities.Entities
{
   public class TaskBE
    {
        public TaskBE()
        {
            Citizens = new HashSet<CitizenBE>();
        }
        public Int64 ID { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }

        public virtual ICollection<CitizenBE> Citizens { get; set; }
    }
}
