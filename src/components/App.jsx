import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function EntryDetails(detail) {
  return (
    <Entry
      key={detail.id}
      emoji={detail.emoji}
      name={detail.name}
      meaning={detail.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(EntryDetails)}</dl>
    </div>
  );
}

export default App;
