// Father.js
import Son from "./Son";

function Father({ name, house, job }) {
  return (
    <div className="box father">
      <h3>{name}</h3>
      <p>House: {house}</p>
      <p>Job: {job}</p>

      <Son name="Son" hobby="Coding React" />
    </div>
  );
}

export default Father;
