import { PrimaryButtonProps } from "../../types";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, text }) => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      <button
        className="group relative inline-block focus:outline-none focus:ring-0"
        onClick={onClick}
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          {text}
        </span>
      </button>
    </div>
  );
};

export default PrimaryButton;
