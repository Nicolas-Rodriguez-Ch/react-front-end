import "./CancelButton.css";
interface CancelButtonProps {
  onChange?: (value: string) => void;
}

const CancelButton = ({ onChange }: CancelButtonProps) => {
  return (
    <button className="cancel-button">Cancel</button>
  );
};

export default CancelButton;
