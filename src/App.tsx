import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./App.css";
import { getRoster } from "./common/api";
import { Player } from "./common/classes";
import EditPlayerModal from "./components/EditPlayerModal/EditPlayerModal";
import Roster from "./components/Roster/Roster";

type EditPlayerModalState = {
  showModal: boolean;
  isEditing: boolean;
}

function App() {
  const [modalState, setModalState] = useState<EditPlayerModalState>({
    showModal: false,
    isEditing: false,
  })

  const [rosterState, setRosterState] = useState<Player[]>([]);
  const [rosterName, setRosterName] = useState('');
  const [loadedRoster, setLoadedRoster] = useState(false);

  const onAddPlayerButtonClick = () => {
    setModalState({...modalState, showModal: true})
  }

  const onCancelEditClick = () => {
    setModalState({...modalState, showModal: false})
  }

  const onConfirmUpdateClick = (player: Player) => {
    setModalState({...modalState, showModal: false})
    setRosterState([...rosterState, player]);
  }

  const onChangeRosterName = (e: ChangeEvent<HTMLInputElement>) => {
    setRosterName(e.target.value);
  }

  const onLoadRosterClick = () => {
    getRoster(rosterName);
    setLoadedRoster(true);
  }

  const getHeaderTitle = () => loadedRoster ? rosterName : "WoW Roster Tracker";
  const getSaveButtonName = () => loadedRoster ? "Save" : "Create New";

  return (
    <>
      <header className="app-header">
        <h1 className="app-header__title">{getHeaderTitle()}</h1>
      </header>
      <main>
        <section className="save-load-roster-section">
          <div className="save-load-roster-section__name">
            <label>Roster Name</label>
            <input type="text" onChange={onChangeRosterName}/>
          </div>
          <div>
            <button onClick={onLoadRosterClick}>Load</button> 
            <button>{getSaveButtonName()}</button>
          </div>
        </section>
        {loadedRoster && <Roster onAddPlayerButtonClick={onAddPlayerButtonClick} players={rosterState}/>}
      </main>
      <EditPlayerModal showModal={modalState.showModal} onUpdatePlayerClick={onConfirmUpdateClick} onCancelClick={onCancelEditClick} isEditing={modalState.isEditing}/>
    </>
  );
}

export default App;
