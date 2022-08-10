import "./App.css";
import Roster from "./components/Roster/Roster";

function App() {
  return (
    <>
      <header className="app-header">
        <h1 className="app-header__title">WoW Roster Tracker</h1>
      </header>
      <main>
        <Roster />
      </main>
    </>
  );
}

export default App;
