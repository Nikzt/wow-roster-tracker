import { useState } from "react";
import { getWoWClassById, getWoWClassOptionsList, WoWCharacter, WoWClassEnum, WoWSpecEnum } from "../../common/classes";
import SpecSelector from "../SpecSelector/SpecSelector";
import "./characterSelector.css";

type Character = {
  id: number;
  showOptions: boolean;
  name: string;
  classId: WoWClassEnum;
}

type CharacterSelectorProps = {
  onChange: (characters: WoWCharacter[]) => void
}

type SpecSelections = {[key: number]: {
  isSelected: boolean;
  isMain: boolean;
}}

const CharacterSelector = ({onChange}: CharacterSelectorProps) => {
  const classOptions = getWoWClassOptionsList();

  const [characters, setCharacters] = useState<Character[]>([]);

  const updateCharacters = (characters: Character[]) => {
    const wowCharacters: WoWCharacter[] = characters.map(c => {return {
      class: c.classId,
      name: c.name,
      mainSpec: WoWSpecEnum.unknown,
      offSpec: WoWSpecEnum.unknown,
    }})
    onChange(wowCharacters.filter(c => c.name?.length > 2 && c.class != WoWClassEnum.unknown && c.class != null));
    setCharacters(characters);
  }

  const onClassSelectButtonClick = (id: number) => {
    const characterIdx = characters.findIndex(c => c.id === id);
    if (characterIdx < 0) return;
    const nextCharacters = [...characters];
    nextCharacters[characterIdx].showOptions = !nextCharacters[characterIdx].showOptions;

    updateCharacters(nextCharacters);
  }

  const onAddCharacterButtonClick = () => {
  const nextCharacters = [...characters, {
      showOptions: false,
      id: characters.reduce((a, b) => a > b.id ? a : b.id, 0) + 1,
      name: "",
      classId: WoWClassEnum.unknown
    }]
    updateCharacters(nextCharacters);
  }

  const onSelectClass = (charId: number, classId: WoWClassEnum) => {
    const characterIdx = characters.findIndex(c => c.id === charId);
    if (characterIdx < 0) return;
    const nextCharacters = [...characters];
    nextCharacters[characterIdx].classId = classId;
    nextCharacters[characterIdx].showOptions = false;
    updateCharacters(nextCharacters);
  }

  const onChangeCharacterName = (e: React.FocusEvent<HTMLInputElement, Element>, charId: number) => {
    const characterIdx = characters.findIndex(c => c.id === charId);
    if (characterIdx < 0) return;
    const nextCharacters = [...characters];
    nextCharacters[characterIdx].name = e.target.value;
    updateCharacters(nextCharacters);
  }

  const onUpdateSpecSelections = (characterId: number, specSelections: SpecSelections) => {

  }

  const isUnselectedClass = (classId: WoWClassEnum) => classId === WoWClassEnum.unknown;
  const plusIcon = new URL("../../assets/icons/plus.svg", import.meta.url).href;

  return <>

    <h3 className="edit-player-modal__section-header characters-header">Characters<button onClick={onAddCharacterButtonClick} className="add-button"><img src={plusIcon}/></button></h3>
    <div className="character-selector-section">
      {characters.map(c => <div className={`character-selector ${c.showOptions ? "options-visible": ""}`}>

        <div className="character-selector__selection">
          <input type="text" onBlur={(e) => onChangeCharacterName(e, c.id)}/>
          <button className="class-select-button character-selector__selection-value"
                  onClick={() => onClassSelectButtonClick(c.id)}
                  >
              <img className={`class-icon ${isUnselectedClass(c.classId) ? "desaturate" : ""}`} src={ getWoWClassById(c.classId).icon}/>
              <p style={{color: getWoWClassById(c.classId).color}}>{getWoWClassById(c.classId).name}</p>
          </button>
        </div>

        <div className={`character-selector__class-options ${c.showOptions ? "show" : ""}`}>
          {classOptions.map((classOption) => 
            <button className="class-select-button" onClick={() => onSelectClass(c.id, classOption.id)}>
              <img className="class-icon" src={classOption.icon}/>
              <p style={{color: classOption.color}}>{classOption.name}</p>
            </button>
          )}
        </div>

        <SpecSelector classId={c.classId} onUpdateSpecSelections={onUpdateSpecSelections}/>
      </div>
     )}
   </div></>
}

export default CharacterSelector;
