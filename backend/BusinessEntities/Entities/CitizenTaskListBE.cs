using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities.Entities
{
    public class CitizenTaskListBE
    {
        public Int64 CitizenID { get; set; }
        public List<Int64> TaskIds { get; set; }
    }
}
