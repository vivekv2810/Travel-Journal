import React from 'react';
import './JournalEntry.css';

function JournalEntry({ entry }) {
  return (
    <div className="journal-entry">
      <h2>{entry.title}</h2>
      <p>{entry.description}</p>
      <small>{entry.date}</small>
    </div>
  );
}

export default JournalEntry;