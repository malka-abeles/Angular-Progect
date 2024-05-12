using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
//using WebApplication1.Models;
using API.Models;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {

        public static List<Job> jobs = new List<Job>()
        {
    new Job
    {
        Fields = JobFields.BackEnd,
        Name = "Alice",
        NumHours = 40,
        Area = "Software Development",
        Requirement = new string[] { "C#", "SQL", "ASP.NET" },
        FromHome = false
    },
    new Job
    {
        Fields = JobFields.Embedded,
        Name = "Bob",
        NumHours = 35,
        Area = "Recruitment",
        Requirement = new string[] { "Interviewing Skills", "HR Policies" },
        FromHome = true
    },
    new Job
    {
        Fields = JobFields.QA,
        Name = "Charlie",
        NumHours = 45,
        Area = "Accounting",
        Requirement = new string[] { "Excel", "Financial Analysis" },
        FromHome = false
    },
    new Job
    {
    Fields= JobFields.FullStack,
    Name= "Software Engineer",
    NumHours= 40,
    Area= "IT",
    Requirement= new string[]{"Bachelor's degree", "Experience with JavaScript"},
    FromHome= true,
  },
  new Job
  {
    Fields= JobFields.BackEnd,
    Name= "Backend Developer",
    NumHours= 35,
    Area= "Software Development",
    Requirement= new string[]{"Bachelor's degree", "Experience with Python"},
    FromHome= false,
  },
  new Job
  {
    Fields= JobFields.FrontEnd,
    Name= "Frontend Developer",
    NumHours= 40,
    Area= "Web Development",
    Requirement= new string []{"Bachelor's degree", "Experience with HTML/CSS/JS"},
    FromHome= true,

  },
  new Job
  {
    Fields= JobFields.Embedded,
    Name= "Embedded Systems Engineer",
    NumHours= 35,
    Area= "Electronics",
    Requirement= new string[]{"Bachelor's degree", "Experience with C/C++"},
    FromHome= false,
  },
        };


        [HttpGet("GetAllJobs")]
        public ActionResult GetAllJobs()
        {
            return Ok(jobs);
        }

        //[HttpPost("AddCostume")]
        //public ActionResult AddCostume([FromBody]Job newCostume)
        //{
        //    savedCostumes.Add(newCostume);
        //    return Ok();
        //}
    }
}
