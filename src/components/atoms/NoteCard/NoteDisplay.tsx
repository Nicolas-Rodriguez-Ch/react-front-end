import "./NoteDisplay.css";
interface NoteDisplayProps {
  value: string;
}

const NoteDisplay = ({ value }: NoteDisplayProps) => {
  return (
    <div className="note-display">
      <b>Note:</b> {value}
    </div>
  );
};

export default NoteDisplay;
