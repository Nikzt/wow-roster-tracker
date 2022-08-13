import { getRoster } from "../../common/api";
import { Player, WoWClassEnum, WoWSpecEnum } from "../../common/classes";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import "./roster.css";

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
