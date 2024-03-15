namespace APIThings.Data
{

    // The database should be set up using the Repository Pattern in ASP.NET
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlerContext _bowlerContext;
        public EFBowlerRepository(BowlerContext temp) {
            _bowlerContext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers;
        public IEnumerable<Team> Teams => _bowlerContext.Teams;
    }
}
