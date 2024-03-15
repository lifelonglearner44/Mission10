import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './BowlerList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* Use both the header and bowler list components in the App component to display the required info */}
      <Header title="Bowler List" />
      <BowlerList />
      <Footer />
    </div>
  );
}

export default App;
