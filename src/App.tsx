import "./App.css";
import { useState } from "react";
import NewNoteForm from "./components/molecules/NewNoteForm/NewNoteForm";
import NoteCard from "./components/molecules/NoteCard/NoteCard";

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  return (
    <div className="main-app">
      <NewNoteForm onAddNote={addNote} />
      <div className="notes-list">
        {notes.map((note) => (
          <NoteCard key={note} value={note}/>
        ))}
      </div>
    </div>
  );
}

export default App;
