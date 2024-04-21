export default function Question({ id, question, answer, setActive, active }) {
  const clickHandler = () => {
    if (active == id) {
      setActive(null);
      return;
    }
    setActive(id);
  };

  return (
    <li
      onClick={() => clickHandler()}
      className="border-gray-400 border-b py-2 p-5 cursor-pointer"
    >
      <h1>{question}</h1>

      {active == id && <div dangerouslySetInnerHTML={{ __html: answer }} className="py-5 px-5"/>}
    </li>
  );
}
