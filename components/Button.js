export default function Button({ text, link }) {
  return (
    <button className=" rounded-full text-bg-light border bg-coffee-accent border-coffee-accent w-full p-2 font-medium my-4">
      <a href={link}>{text}</a>
    </button>
  );
}
