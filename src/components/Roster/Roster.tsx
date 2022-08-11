import { useState } from "react";
import { Player, WoWClassEnum, WoWSpecEnum } from "../../common/classes";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import "./roster.css";

const testPlayers: Player[] = [
  {
    id: "Bence",
    info: {
      name: "Bence",
      discord: "Nikzt",
      battleNet: "Nikzt",
    },
    characters: [
      {
        name: "Zalgo",
        class: WoWClassEnum.warrior,
        mainSpec: WoWSpecEnum.warriorFury
      }
    ],
    mainCharacterName: "Zalgo",
  },
]

type RosterProps = {
  onAddPlayerButtonClick: () => void;
  players: Player[];
}

const Roster = ({onAddPlayerButtonClick, players}: RosterProps) => {

  return (
    <div className="roster">
      <button className="add-player-button default-button" onClick={onAddPlayerButtonClick}>Add Player</button>
      <div className="roster__player-list">
        {players.map(p => <PlayerListItem player={p} key={p.id} />)}
      </div>
    </div>
  );
};

export default Roster;
