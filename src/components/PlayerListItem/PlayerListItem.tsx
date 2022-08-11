import { useMemo } from "react";
import { getWoWClassDetails, getWoWRoleDetails, getWoWSpecDetails, Player } from "../../common/classes";
import "./playerListItem.css";

type PlayerProps = {
  player: Player;
}

const PlayerListItem = ({player}: PlayerProps) => {
  const mainCharacter = useMemo(() => {
    return player.characters.find(c => c.name === player.mainCharacterName);
  }, [player.mainCharacterName])

  const mainCharacterClass = useMemo(() => {
    if (!mainCharacter) return;
    return getWoWClassDetails(mainCharacter.class);
  }, [mainCharacter]);

  const mainCharacterSpec = useMemo(() => {
  if (!mainCharacter) return;
    return getWoWSpecDetails(mainCharacter.mainSpec);
  }, [mainCharacter]);

  const mainCharacterRole = useMemo(() => {
    if (!mainCharacterSpec) return;
    return getWoWRoleDetails(mainCharacterSpec.role);
  }, [mainCharacterSpec]);

  const getBorderGradient = () => {
    const beginColor = mainCharacterRole?.color;
    const endColor = mainCharacterClass?.color;
    return `linear-gradient(90deg, ${beginColor} 0%, ${beginColor} 40%, ${endColor} 60%, ${endColor} 100% )`
  }

  return <div className="player">
    <img className="player__role-icon role-icon" src={mainCharacterRole?.icon} />
    <p className="player__name">{player.name}</p>
    <p className="player__main-character" style={{color: mainCharacterClass?.color}}>{mainCharacter?.name}</p>
    <img className="class-icon" src={mainCharacterClass?.icon}/>
  </div>
}

export default PlayerListItem;
