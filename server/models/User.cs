
namespace API.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public JobFields Fields { get; set; }

        public User(string Id, string Name, string Password, JobFields Fields)
        {
            this.Id = Id;
            this.Name = Name;
            this.Password = Password;
            this.Fields = Fields;
        }

public User()
{
    
}
    }


}
