import CancelButton from "../../atoms/CancelButton/CancelButton";
import InputText from "../../atoms/InputText/InputText";
import SubmitButton from "../../atoms/SubmitButton/SubmitButton";
import "./NewNoteForm.css";
import { useState } from "react";
interface NewNoteFormProps {
  onAddNote: (note: string) => void;
}

const NewNoteForm = ({ onAddNote }: NewNoteFormProps) => {
  const [note, setNote] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      onAddNote(note);
      setNote("");
    }
  };

  return (
    <form className="new-note-form" onSubmit={onSubmit}>
      <InputText
        label="New Note"
        placeHolder="Write a new note"
        value={note}
        onChange={setNote}
      />
      <CancelButton onChange={setNote} />
      <SubmitButton />
    </form>
  );
};

export default NewNoteForm;
