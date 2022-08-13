import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./App.css";
import { getRoster, postRoster } from "./common/api";
import { Player, Roster } from "./common/classes";
import EditPlayerModal from "./components/EditPlayerModal/EditPlayerModal";
import RosterPlayerList from "./components/RosterPlayerList/RosterPlayerList";
import toastr from "toastr";

type EditPlayerModalState = {
  showModal: boolean;
  isEditing: boolean;
};

function App() {
  const [modalState, setModalState] = useState<EditPlayerModalState>({
    showModal: false,
    isEditing: false,
  });

  const [roster, setRoster] = useState<Roster>({
    id: "",
    players: [],
  });

  const [loadedRoster, setLoadedRoster] = useState(false);
  const [creatingNewRoster, setCreatingNewRoster] = useState(false);

  const onAddPlayerButtonClick = () => {
    setModalState({ ...modalState, showModal: true });
  };

  const onCancelEditClick = () => {
    setModalState({ ...modalState, showModal: false });
  };

  const onConfirmUpdateClick = (player: Player) => {
    setModalState({ ...modalState, showModal: false });
    const nextRoster = { ...roster };
    const playerIdx = nextRoster.players.findIndex((p) => p.id === player.id);
    if (playerIdx < 0) nextRoster.players.push(player);
    else nextRoster.players[playerIdx] = player;
    setRoster(nextRoster);
  };

  const onChangeRosterName = (e: ChangeEvent<HTMLInputElement>) => {
    setRoster({ ...roster, id: e.target.value });
  };

  const onLoadRosterClick = async () => {
    if (roster.id.trim().length < 1) {
      toastr.error(`Please enter a roster name to load.`);
      return;
    }

    const nextRoster = await getRoster(roster.id);
    if (!nextRoster) {
      toastr.error(`Roster with name '${roster.id}' not found.`);
      return;
    }
    setRoster(nextRoster as Roster);
    setLoadedRoster(true);
  };

  const onSaveRosterClick = async () => {
    const result = await postRoster(roster);
    if (result)
      toastr.success(`Successfully saved roster '${roster.id}'`)
  };

  const onCreateNewRosterClick = () => {
    setRoster({
      id: roster.id,
      players: [],
    });
    setLoadedRoster(true);
  };

  const getHeaderTitle = () =>
    loadedRoster ? roster.id : "WoW Roster Tracker";
  const getSaveButtonName = () => (loadedRoster ? "Save" : "Create New");

  return (
    <>
      <header className="app-header">
        <h1 className="app-header__title">{getHeaderTitle()}</h1>
        {loadedRoster && (
          <button
            onClick={onSaveRosterClick}
          >
            {getSaveButtonName()}
          </button>
        )}
      </header>
      <main>
        {!loadedRoster && (
          <section className="save-load-roster-section">
            <div className="save-load-roster-section__name">
              <label>Roster Name</label>
              <input type="text" onChange={onChangeRosterName} />
            </div>
            <div>
              <button onClick={onLoadRosterClick}>Load</button>
              <button
                onClick={
                  loadedRoster ? onSaveRosterClick : onCreateNewRosterClick
                }
              >
                {getSaveButtonName()}
              </button>
            </div>
          </section>
        )}
        {loadedRoster && (
          <RosterPlayerList
            onAddPlayerButtonClick={onAddPlayerButtonClick}
            roster={roster}
          />
        )}
      </main>
      <EditPlayerModal
        showModal={modalState.showModal}
        onUpdatePlayerClick={onConfirmUpdateClick}
        onCancelClick={onCancelEditClick}
        isEditing={modalState.isEditing}
      />
    </>
  );
}

export default App;
