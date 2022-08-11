import { useState } from "react";
import "./App.css";
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

  const onAddPlayerButtonClick = () => {
    setModalState({...modalState, showModal: true})
  }

  const onCancelEditClick = () => {
    setModalState({...modalState, showModal: false})
  }

  const onConfirmUpdateClick = () => {
    setModalState({...modalState, showModal: false})
  }

  return (
    <>
      <header className="app-header">
        <h1 className="app-header__title">WoW Roster Tracker</h1>
      </header>
      <main>
        <Roster onAddPlayerButtonClick={onAddPlayerButtonClick}/>
      </main>
      <EditPlayerModal showModal={modalState.showModal} onUpdatePlayerClick={onConfirmUpdateClick} onCancelClick={onCancelEditClick} isEditing={modalState.isEditing}/>
    </>
  );
}

export default App;
