import "./CancelButton.css";
interface CancelButtonProps {
  onChange: (value: string) => void;
}

const CancelButton = ({ onChange }: CancelButtonProps) => {
  const handleCancel = () => {
    if (onChange) {
      onChange("");
    }
  };

  return (
    <button className="cancel-button" onClick={handleCancel} type="button">
      Cancel
    </button>
  );
};

export default CancelButton;
