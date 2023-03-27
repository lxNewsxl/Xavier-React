
namespace Xavier.React
{
    public partial class Test : Xavier.XavierNode
    {
        public string Title { get; set; } = "This is only a test";
        public string Description { get; set; } = "How will we know when we've reached the stars?";
        new public string Route { get; set; } = "'/'";
        new public bool ShouldRender { get; set; } = true;
        public string item { get; set; } = "This is the item";
        public Test() {
            
        }
    }
}