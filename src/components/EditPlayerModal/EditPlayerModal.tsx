import { ChangeEvent, FormEvent, useState } from "react";
import { Player, WoWCharacter } from "../../common/classes";
import CharacterSelector from "../CharacterSelector/CharacterSelector";
import "./editPlayerModal.css";

type EditPlayerModalProps = {
  showModal: boolean;
  isEditing: boolean;
  onCancelClick: () => void;
  onUpdatePlayerClick: (player: Player) => void;
}

const EditPlayerModal = ({showModal, isEditing, onCancelClick, onUpdatePlayerClick}: EditPlayerModalProps) => {
  if (!showModal) return <></>;
  const [player, setPlayer] = useState<Player>({
    id: "",
    info: {
      name: "",
    },
    characters: [],
    mainCharacterName: "",
  });

  const onSaveClick = () => {
    // Update player info
    onUpdatePlayerClick(player);
  }

  const updatePlayerInfo = (e: ChangeEvent<HTMLInputElement>, inputName: string) => {
    const nextPlayer = {...player};
    // @ts-ignore
    nextPlayer.info[inputName] = e.target.value;
    if (inputName === "name")
      nextPlayer.id = e.target.value;
    setPlayer(nextPlayer);
  }

  const onUpdateCharacterSelections = (characters: WoWCharacter[]) => {
    const nextPlayer = {...player, characters};
    nextPlayer.mainCharacterName = characters.length > 0 ? characters[0].name : "";
    setPlayer(nextPlayer);
  }

  return <>
    <div className="modal-overlay" >
    </div>
    <div className="modal-container">
      <div className="edit-player-modal">
        <h3 className="edit-player-modal__section-header">Player Info</h3>
        <div className="edit-player-modal__player-info">
          <label>Name</label>
          <input onChange={(e) => updatePlayerInfo(e, "name")} type="text" name="name" spellCheck="false"/>
          {/* <label>Discord</label> */}
          {/* <input onChange={(e) => updatePlayerInfo(e, "discord")} type="text" name="discord" spellCheck="false"/> */}
          {/* <label>Battle.net</label> */}
          {/* <input onChange={(e) => updatePlayerInfo(e, "battleNet")} type="text" name="battleNet" spellCheck="false"/> */}
        </div>
        <CharacterSelector onChange={onUpdateCharacterSelections}/>
        <footer className="modal-footer">
          <button onClick={onCancelClick}>Cancel</button>
          <button onClick={onSaveClick} className="default-button">Save</button>
        </footer>
      </div>
    </div>
  </>
}

export default EditPlayerModal;
