type VoteItemProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};

export default function VoteItem({
  id,
  name,
  label,
  value,
  checked = false,
  onChange,
}: VoteItemProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2 px-4 py-2.5 border border-[#D4D4D4] cursor-pointer"
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="cursor-pointer"
      />
      <span className="leading-6 font-medium">{label}</span>
    </label>
  );
}
