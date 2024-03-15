namespace APIThings.Data
{
    // The database should be set up using the Repository Pattern in ASP.NET
    public interface IBowlerRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team> Teams { get; }
    }
}
