// GrandFather.js
import Father from "./Father";

function GrandFather({ name, house }) {
  return (
    <div className="box grandfather">
      <h3>{name}</h3>
      <p>House: {house}</p>

      <Father name="Father" house={house} job="Engineer" />
    </div>
  );
}

export default GrandFather;
