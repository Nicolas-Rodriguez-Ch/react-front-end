import "./InputText.css";
interface InputTextProps {
  label: string;
  placeHolder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputText = ({ label, placeHolder, value, onChange }: InputTextProps) => {
  return (
    <div className="input-text">
      <label className="input-text__label" htmlFor={label}>
        {label}
      </label>
      <input
        className="input-text__field"
        type="text"
        id={label}
        name={label}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default InputText;
