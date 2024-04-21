export default function UserButton({ text, setUser, id }) {
  const clickHandle = () => {
    setUser(id);
  };

  return (
    <button
      className="bg-green-300 p-5 rounded-xl hover:bg-green-400"
      onClick={() => clickHandle()}
    >
      I am a {text}
    </button>
  );
}
