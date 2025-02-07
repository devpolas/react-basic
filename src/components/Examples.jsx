import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { EXAMPLES } from "./../data/data_v2";
import Tab from "./Tab";

function Examples() {
  const defaultValue = EXAMPLES[0];
  const [example, setExample] = useState(defaultValue || []);
  function handelClick(data) {
    setExample(data);
  }

  return (
    <section id="examples">
      <Tab
        title="Examples"
        button={EXAMPLES.map((el) => (
          <TabButton
            isSelected={el.title === example.title}
            handelClick={handelClick}
            example={el}
            key={el.title}
          />
        ))}
      >
        <TabContent example={example} />
      </Tab>
    </section>
  );
}

export default Examples;
