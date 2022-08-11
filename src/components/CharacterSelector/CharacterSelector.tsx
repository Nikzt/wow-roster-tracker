import { getWoWClassOptionsList } from "../../common/classes";
import "./characterSelector.css";

const CharacterSelector = () => {
  const classOptions = getWoWClassOptionsList();

  return <div className="character-selector">
    <div className="character-selector__selection">
      <button className="class-select-button">
          <img className="class-icon" src={classOptions[0].icon}/>
          <p>{classOptions[0].name}</p>
      </button>
    </div>
    <div className="character-selector__class-options">
      {classOptions.map((c) => 
        <button className="class-select-button">
          <img className="class-icon" src={c.icon}/>
          <p>{c.name}</p>
        </button>
      )}
    </div>
  </div>
}

export default CharacterSelector;
