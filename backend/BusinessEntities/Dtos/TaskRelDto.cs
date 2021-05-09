using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities.Dtos
{
    public class TaskRelDto
    {
        public TaskRelDto()
        {
            CitizenProfileDtos = new HashSet<CitizenProfileDto>();
        }
        public string Date { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<CitizenProfileDto> CitizenProfileDtos { get; set; }
    }
}
