import { useState } from "react";
import { WoWClass, WoWClassOptions } from "../../common/classes";
import "./roster.css";

type Player = {
  name: string;
  characters: WoWClass[];
}

const Roster = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const classOptions = Object.values(WoWClassOptions);

  const onAddPlayerClick = () => {
    const inputButton = document.querySelector(".add-player-button") as HTMLInputElement;
    if (!inputButton || !inputButton.value || !(inputButton.value.trim())) return;

    const newPlayer: Player = {
      name: inputButton.value,
      characters: []
    }

    const nextPlayersState = [...players, newPlayer];
    setPlayers(nextPlayersState);
    inputButton.value = "";
  }

  return (
    <div className="roster">
      <ul>
        {classOptions.map(c => <li key={c.name} style={{backgroundColor: c.color}}>
          <img src={c.icon}/>
          {c.name}
        </li>)}
      </ul>
      <ul>
        {players.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
      <input className="add-player-button" type="text"/>
      <button onClick={onAddPlayerClick}>Add Player</button>
    </div>
  );
};

export default Roster;
