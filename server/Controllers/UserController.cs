using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        // Array of User objects
    static List<User> users = new List<User>()
    {
        new User
        {
            Id = "001",
            Name = "aaa",
            Password = "aaaaaaaaa",
            Fields = JobFields.FullStack
        },
        new User
        {
            Id = "002",
            Name = "HR Manager",
            Password = "hrpassword",
            Fields = JobFields.QA
        },
        new User
        {
            Id = "003",
            Name = "Financial Analyst",
            Password = "financepassword",
            Fields = JobFields.BackEnd
        },
        new User
        {
            Id= "user1",
            Name= "John Doe",
            Password= "password1",
            Fields= JobFields.FullStack,
        },  
        new User      
        {        
            Id= "user2",
            Name= "Jane Smith",
            Password= "password2",
            Fields= JobFields.FrontEnd,
        },      
        new User  
        {        
            Id= "user3",
            Name= "Alice Johnson",
            Password= "password3",
            Fields= JobFields.BackEnd,
        },     
        new User   
        {        
            Id= "user4",
            Name= "Bob Anderson",
            Password= "password4",
            Fields= JobFields.QA,
        },     
        new User   
        {        
            Id= "user5",
            Name= "Emily White",
            Password= "password5",
            Fields= JobFields.Embedded,
        },
    };

        // GET: api/<PersonController>
        //[HttpGet("GetPersons")]
        //public List<Job> Get()
        //{
        //    return users;
        //}

        // GET api/<PersonController>/5
        [HttpPost("id")]
        public ActionResult<User> Post(User user)
        {
            User myUser = users.FirstOrDefault(u => u.Name == user.Name);
            if (myUser == null)
                return null;
            if (myUser.Password != user.Password)
                return null;
            return myUser;
        }

        // POST api/<PersonController>
        //[HttpPost("AddPerson")]
        //public void Post([FromBody] User newPerson)
        //{
        //    allPeople.Add(newPerson);
        //}

        // PUT api/<PersonController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<PersonController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
