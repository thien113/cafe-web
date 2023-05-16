export default function Button({ text }) {
  return (
    <button className=" rounded-full text-bg-light border bg-coffee-accent border-coffee-accent w-full p-2 font-medium my-4">
      {text}
    </button>
  );
}
