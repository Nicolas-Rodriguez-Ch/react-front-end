import "./App.css";
import { useState } from "react";
import NewNoteForm from "./components/molecules/NewNoteForm/NewNoteForm";

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  return (
    <div>
      <NewNoteForm onAddNote={addNote} />
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
