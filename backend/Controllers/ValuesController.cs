using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var values = new List<string> { "data1", "data2", "data3" };
        return Ok(values);
    }
}
