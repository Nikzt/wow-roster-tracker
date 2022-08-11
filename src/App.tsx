import { useState } from "react";
import "./App.css";
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

  return (
    <>
      <header className="app-header">
        <h1 className="app-header__title">WoW Roster Tracker</h1>
      </header>
      <main>
        <Roster onAddPlayerButtonClick={onAddPlayerButtonClick} players={rosterState}/>
      </main>
      <EditPlayerModal showModal={modalState.showModal} onUpdatePlayerClick={onConfirmUpdateClick} onCancelClick={onCancelEditClick} isEditing={modalState.isEditing}/>
    </>
  );
}

export default App;
