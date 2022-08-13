import { Roster } from "../../common/classes";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import "./rosterPlayerList.css";

type RosterProps = {
  onAddPlayerButtonClick: () => void;
  roster: Roster;
}

const RosterPlayerList = ({onAddPlayerButtonClick, roster}: RosterProps) => {
  
  return (
    <div className="roster">
      <button className="add-player-button default-button" onClick={onAddPlayerButtonClick}>Add Player</button>
      <div className="roster__player-list">
        {roster.players.map(p => <PlayerListItem player={p} key={p.id} />)}
      </div>
    </div>
  );
};

export default RosterPlayerList;
