import "./DoneButton.css";
interface DoneButtonProps {
  onDone: () => void;
}

const DoneButton = ({ onDone }: DoneButtonProps) => {
  return (
    <button type="button" className="done-button" onClick={onDone}>
      Finished the task?
    </button>
  );
};

export default DoneButton;
