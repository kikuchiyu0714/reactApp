using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic; 

[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
    // DAta Model
    public class PaymentData
    {
        public int docNumber { get; set; }
        public string docDate { get; set; }
        public string type { get; set; }
        public string status { get; set; }
        public double amount { get; set; }
    }

    [HttpGet]
    public IActionResult Get()
    {
        var payments = new List<PaymentData>
        {
            new PaymentData { docDate = "10/13/2024",
                              docNumber = 111111,
                              type = "WEB PAYMENT",
                              status = "Pending",
                              amount = 3840.69
                              },
            new PaymentData { docDate = "10/13/2024",
                              docNumber = 222222,
                              type = "WEB PAYMENT",
                              status = "Pending",
                              amount = 3840.69
                              },
            new PaymentData { docDate = "10/13/2024",
                              docNumber = 333333,
                              type = "WEB PAYMENT",
                              status = "Pending",
                              amount = 3840.69
                              },
            new PaymentData { docDate = "10/13/2024",
                              docNumber = 444444,
                              type = "WEB PAYMENT",
                              status = "Pending",
                              amount = 3840.69
                              },
            new PaymentData { docDate = "10/13/2024",
                              docNumber = 555555,
                              type = "WEB PAYMENT",
                              status = "Pending",
                              amount = 3840.69
                              },
            new PaymentData { docDate = "10/13/2024",
                              docNumber = 666666,
                              type = "WEB PAYMENT",
                              status = "Pending",
                              amount = 3840.69
                              },
        };

        return Ok(payments);
    }
}
