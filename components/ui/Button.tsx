export default function Button({ text }: { text?: string }) {
  return (
    <button className="px-7 py-2 rounded-lg bg-primary hover:rounded-none text-white cursor-pointer transition-all ease-in-out">
      {text}
    </button>
  );
}
