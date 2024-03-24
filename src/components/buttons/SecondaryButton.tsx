import { SecondaryButtonProps } from "../../types";

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onClick,
  text,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group relative inline-block focus:outline-none focus:ring-0"
    >
      <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
      <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
        {text}
      </span>
    </button>
  );
};

export default SecondaryButton;
