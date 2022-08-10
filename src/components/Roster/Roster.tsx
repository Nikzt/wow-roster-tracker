import { useState } from "react";
import { Player, WoWClassEnum, WoWSpecEnum } from "../../common/classes";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import "./roster.css";

const testPlayers: Player[] = [
  {
    name: "Bence",
    characters: [
      {
        name: "Zalgo",
        class: WoWClassEnum.warrior,
        mainSpec: WoWSpecEnum.warriorFury
      }
    ],
    mainCharacterName: "Zalgo",
  },
  {
    name: "Bram",
    characters: [
      {
        name: "Tygerz",
        class: WoWClassEnum.druid,
        mainSpec: WoWSpecEnum.druidFeralTank
      }
    ],
    mainCharacterName: "Tygerz"
  },
  {
    name: "Dan",
    characters: [
      {
        name: "Rarewaffles",
        class: WoWClassEnum.shaman,
        mainSpec: WoWSpecEnum.shamanRestoration
      }
    ],
    mainCharacterName: "Rarewaffles"
  },
  {
    name: "Butthead",
    characters: [
      {
        name: "Butthead",
        class: WoWClassEnum.rogue,
        mainSpec: WoWSpecEnum.rogueAssassination
      }
    ],
    mainCharacterName: "Butthead",
  },
]

const Roster = () => {
  const [players, setPlayers] = useState<Player[]>(testPlayers);

  const onAddPlayerClick = () => {
    const inputButton = document.querySelector(".add-player-button") as HTMLInputElement;
    if (!inputButton || !inputButton.value || !(inputButton.value.trim())) return;

    const newPlayer: Player = {
      name: inputButton.value,
      characters: [],
      mainCharacterName: "",
    }

    const nextPlayersState = [...players, newPlayer];
    setPlayers(nextPlayersState);
    inputButton.value = "";
  }

  return (
    <div className="roster">
      <div className="roster__player-list">
        {players.map(p => <PlayerListItem player={p} key={p.name} />)}
      </div>
      {/* <input className="add-player-button" type="text"/> */}
      {/* <button onClick={onAddPlayerClick}>Add Player</button> */}
    </div>
  );
};

export default Roster;
