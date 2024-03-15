import { useEffect, useState } from 'react';
import { Bowler } from './types/Bowler';
import { Team } from './types/Team';

// Create a component that has a table that lists out the bowlers.

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    // You will set up a ASP.NET API for the React app to consume to list the bowler data.
    // React & ASP.NET should work together to display the necessary data.

    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5136/Bowler/Bowler');
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      const Trsp = await fetch('http://localhost:5136/Bowler/Team');
      const t = await Trsp.json();
      setTeamData(t);
    };
    fetchTeamData();
  }, []);

  // Only display bowlers who are on the Marlins or Sharks teams.
  const filteredBowlerData = bowlerData.filter((b) => {
    const teamName = teamData.find(
      (team) => team.teamID === b.teamID,
    )?.teamName;
    return teamName === 'Marlins' || teamName === 'Sharks';
  });

  return (
    <>
      <br></br>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        {/* The app should display the following information about each Bowler in the database:
            • Bowler Name (First, Middle,
            Last)
            • Team Name
            • Address
            • City
            • State
            • Zip
            • Phone Number */}
        <tbody>
          {filteredBowlerData.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>
                {teamData.find((team) => team.teamID === b.teamID)?.teamName}
              </td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
