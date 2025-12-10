// Component1.js
import GrandFather from "./GrandFather";

function Component1() {
  return (
    <div className="family-container">
      <h2>Component 1 - Family Tree</h2>
      <GrandFather name="Grandfather" house="Karn Family House" />
    </div>
  );
}

export default Component1;
