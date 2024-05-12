namespace API.Models
{
    public enum JobFields { FullStack, FrontEnd, BackEnd, QA, Embedded };

    public class Job
    {
        public JobFields Fields { get; set; }
        public string Name { get; set; }
        public int NumHours { get; set; }
        public string Area { get; set; }
        public string[] Requirement { get; set; }
        public bool FromHome { get; set; }

        public Job()
        {
        }

        public Job(JobFields Fields, string Name, int NumHours, string Area, string[] Requarment, bool FromHome)
        {
            this.Fields = Fields;
            this.Name = Name;
            this.NumHours = NumHours;
            this.Area = Area;
            this.Requirement = Requarment;
            this.FromHome = FromHome;
        }

    }

}