export default function Button({
  text = "Login",
  disabled = false,
  onClick,
}: {
  text?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-red text-white p-3 text-sm font-medium leading-6"
    >
      {text}
    </button>
  );
}