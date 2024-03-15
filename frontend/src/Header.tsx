// Create a heading component for the web app that describes what the page is about.

function Header(props: any) {
  return (
    <header className="header navbar navbar-dark d-flex flex-column justify-content-center align-items-center">
      <h1>{props.title}</h1>
      <br></br>
      <div className="row">
        <h4 className="text-center">
          This page lists out bowler information for the Marlins and Sharks
          teams.
        </h4>
        <hr></hr>
      </div>
    </header>
  );
}

export default Header;
