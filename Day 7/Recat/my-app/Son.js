// Son.js
import Grandson from "./Grandson";

function Son({ name, hobby }) {
  return (
    <div className="box son">
      <h3>{name}</h3>
      <p>Hobby: {hobby}</p>

      <Grandson name="Grandson" dream="Become Full Stack Dev" />
    </div>
  );
}

export default Son;
