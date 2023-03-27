
namespace Xavier.React
{
    public partial class Article : Xavier.XavierNode
    {
        public string title { get; set; } = "''";
        public string author { get; set; } = "''";
        public string description { get; set; } = "''";
        new public string Route { get; set; } = "''";
        new public bool ShouldRender { get; set; } = true;
        public string item { get; set; } = "This is the item";
        public Article() {
            
        }
    }
}