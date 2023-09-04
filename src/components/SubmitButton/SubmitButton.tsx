import "./SubmitButton.css";
interface SubmitButtonProps {
  value?: string
  onChange?: (value: string) => void;
}

const SubmitButton = ({value, onChange}: SubmitButtonProps) => {
  return (
    <button className="submit-button">Submit</button>
  )
}

export default SubmitButton