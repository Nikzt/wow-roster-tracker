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
        <h3 className="edit-player-modal__section-header">Player Info</h3>
        <form className="edit-player-modal__player-info">
          <label>Name</label>
          <input type="text" spellCheck="false"/>
          <label>Discord</label>
          <input type="text" spellCheck="false"/>
          <label>Battle.net</label>
          <input type="text" spellCheck="false"/>
        </form>
        <h3 className="edit-player-modal__section-header">Characters</h3>
        <CharacterSelector />
        <footer className="modal-footer">
          <button onClick={onCancelClick}>Cancel</button>
          <button onClick={onUpdatePlayerClick} className="default-button">{isEditing ? "Update" : "Add Player"}</button>
        </footer>
      </div>
    </div>
  </>
}

export default EditPlayerModal;
