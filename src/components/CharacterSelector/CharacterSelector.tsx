import { useState } from "react";
import { getWoWClassById, getWoWClassOptionsList, WoWClassEnum } from "../../common/classes";
import "./characterSelector.css";

type Character = {
  id: number;
  showOptions: boolean;
  name: string;
  classId: WoWClassEnum;
}

const CharacterSelector = () => {
  const classOptions = getWoWClassOptionsList();

  const [characters, setCharacters] = useState<Character[]>([]);

  const onClassSelectButtonClick = (id: number) => {
    const characterIdx = characters.findIndex(c => c.id === id);
    if (characterIdx < 0) return;
    const nextCharacters = [...characters];
    nextCharacters[characterIdx].showOptions = !nextCharacters[characterIdx].showOptions;
    setCharacters(nextCharacters);
  }

  const onAddCharacterButtonClick = () => {
    setCharacters([...characters, {
      showOptions: false,
      id: characters.reduce((a, b) => a > b.id ? a : b.id, 0) + 1,
      name: "",
      classId: WoWClassEnum.unknown
    }])
  }

  const onSelectClass = (charId: number, classId: WoWClassEnum) => {
    const characterIdx = characters.findIndex(c => c.id === charId);
    if (characterIdx < 0) return;
    const nextCharacters = [...characters];
    nextCharacters[characterIdx].classId = classId;
    nextCharacters[characterIdx].showOptions = false;
    setCharacters(nextCharacters);
  }

  const isUnselectedClass = (classId: WoWClassEnum) => classId === WoWClassEnum.unknown;
  const plusIcon = new URL("../../assets/icons/plus.svg", import.meta.url).href;

  return <div className="character-selector-section">
    {characters.map(c => <div className={`character-selector ${c.showOptions ? "options-visible": ""}`}>

      <div className="character-selector__selection">
        <input type="text"/>
        <button className="class-select-button character-selector__selection-value"
                onClick={() => onClassSelectButtonClick(c.id)}
                >
            <img className={`class-icon ${isUnselectedClass(c.classId) ? "desaturate" : ""}`} src={ getWoWClassById(c.classId).icon}/>
            <p style={{color: getWoWClassById(c.classId).color}}>{getWoWClassById(c.classId).name}</p>
        </button>
      </div>

      {c.showOptions && <div className="character-selector__class-options">
        {classOptions.map((classOption) => 
          <button className="class-select-button" onClick={() => onSelectClass(c.id, classOption.id)}>
            <img className="class-icon" src={classOption.icon}/>
            <p style={{color: classOption.color}}>{classOption.name}</p>
          </button>
        )}
      </div>}

    </div>
   )}
    <button onClick={onAddCharacterButtonClick} className="add-button"><img src={plusIcon}/></button>
   </div>
}

export default CharacterSelector;
