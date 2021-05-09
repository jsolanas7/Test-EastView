using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities.Dtos
{
    public class CitizenRelDto
    {
        public CitizenRelDto()
        {
            CitizenTasks = new HashSet<CitizenTaskDto>();
        }
        public Int64 ID { get; set; }
        public int DNI { get; set; }
        public string firstName { get; set; }
        public string surName { get; set; }

        public virtual ICollection<CitizenTaskDto> CitizenTasks { get; set; }
    }
}
