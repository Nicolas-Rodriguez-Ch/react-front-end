import DoneButton from "../../atoms/DoneButton/DoneButton";
import NoteDisplay from "../../atoms/NoteCard/NoteDisplay";
import "./NoteCard.css";
interface NoteCardProps {
  value: string;
}

const NoteCard = ({ value }: NoteCardProps) => {
  return (
    <>
      <div className="note-card">
        <NoteDisplay value={value} />
        <DoneButton />
      </div>
    </>
  );
};

export default NoteCard;
