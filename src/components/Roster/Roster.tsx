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

type RosterProps = {
  onAddPlayerButtonClick: () => void;
}

const Roster = ({onAddPlayerButtonClick}: RosterProps) => {
  const [players, setPlayers] = useState<Player[]>(testPlayers);

  return (
    <div className="roster">
      <button className="add-player-button default-button" onClick={onAddPlayerButtonClick}>Add Player</button>
      <div className="roster__player-list">
        {players.map(p => <PlayerListItem player={p} key={p.name} />)}
      </div>
    </div>
  );
};

export default Roster;
