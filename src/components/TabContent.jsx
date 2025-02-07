function TabContent({ example }) {
  const { title, description, code } = example;
  return (
    <div id="tab-content">
      <h3> {title} </h3>
      <p> {description} </p>
      <pre> {code} </pre>
    </div>
  );
}

export default TabContent;
