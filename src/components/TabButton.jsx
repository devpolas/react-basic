function TabButton({ example, handelClick, isSelected }) {
  const { title } = example;

  return (
    <li>
      <button
        className={isSelected ? "active" : ""}
        onClick={() => handelClick(example)}
      >
        {title}
      </button>
    </li>
  );
}

export default TabButton;
