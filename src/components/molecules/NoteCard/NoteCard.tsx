import DoneButton from "../../atoms/DoneButton/DoneButton";
import NoteDisplay from "../../atoms/NoteCard/NoteDisplay";
import "./NoteCard.css";
interface NoteCardProps {
  value: string;
  onRemove: (note: string) => void;
}

const NoteCard = ({ value, onRemove }: NoteCardProps) => {
  return (
    <>
      <div className="note-card">
        <NoteDisplay value={value} />
        <DoneButton onDone={()=> onRemove(value)}/>
      </div>
    </>
  );
};

export default NoteCard;
