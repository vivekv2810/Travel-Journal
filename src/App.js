import React, { useState } from 'react';
import Header from './components/Header';
import JournalEntry from './components/JournalEntry';
import './App.css'; // Import the CSS

function App() {
  // State to store journal entries
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Trip to Bali",
      description: "Bali was an amazing experience, filled with beautiful beaches and great culture!",
      date: "July 10, 2023",
    },
    {
      id: 2,
      title: "Hiking in the Rockies",
      description: "The Rocky Mountains are breathtaking! I enjoyed the trails and wildlife.",
      date: "August 22, 2023",
    },
  ]);

  return (
    <div>
      <Header />
      <div className="entries-list">
        {entries.map(entry => (
          <JournalEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default App;