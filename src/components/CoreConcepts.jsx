import { CORE_CONCEPTS } from "../data/data_v2";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((el) => (
          <CoreConcept data={el} key={el.title} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
