import CharacterSelector from "../CharacterSelector/CharacterSelector";
import "./editPlayerModal.css";

type EditPlayerModalProps = {
  showModal: boolean;
  isEditing: boolean;
  onCancelClick: () => void;
  onUpdatePlayerClick: () => void;
}

const EditPlayerModal = ({showModal, isEditing, onCancelClick, onUpdatePlayerClick}: EditPlayerModalProps) => {
  if (!showModal) return <></>;
  return <>
    <div className="modal-overlay" >
    </div>
    <div className="modal-container">
      <div className="edit-player-modal">
        <form className="edit-player-modal__player-info">
          <label>Name</label>
          <input type="text" spellCheck="false"/>
          <label>Discord</label>
          <input type="text" spellCheck="false"/>
          <label>Battle.net</label>
          <input type="text" spellCheck="false"/>
        </form>
        <CharacterSelector />
        <button onClick={onUpdatePlayerClick}>{isEditing ? "Update" : "Add Player"}</button>
        <button onClick={onCancelClick}>Cancel</button>
      </div>
    </div>
  </>
}

export default EditPlayerModal;
