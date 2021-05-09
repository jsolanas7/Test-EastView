using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities.Dtos
{
    public class CitizenTaskDto
    {
        public Int64 TaskID { get; set; }
        public Int64 CitizenID { get; set; }
        public CitizenProfileDto Citizen { get; set; }
        public TaskProfileDto Task { get; set; }
    }
}
