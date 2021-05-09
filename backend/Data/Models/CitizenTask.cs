using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class CitizenTask
    {
        public Int64 CitizenId { get; set; }
        public Int64 TaskId { get; set; }

        public virtual Task Task { get; set; }
        public virtual Citizen Citizen { get; set; }
    }
}
