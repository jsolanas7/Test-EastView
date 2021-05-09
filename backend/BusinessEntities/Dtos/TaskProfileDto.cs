using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities.Dtos
{
    public class TaskProfileDto
    {
        public Int64 ID { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }

    }
}
