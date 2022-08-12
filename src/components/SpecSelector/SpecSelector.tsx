import { useState } from "react";
import { getWoWSpecsByClassId, WoWClassEnum, WoWSpec } from "../../common/classes";
import "./specSelector.css";

type SpecSelectorProps = {
    classId: WoWClassEnum;
    onUpdateSpecSelections: Function;
}

const SpecSelector = ({classId, onUpdateSpecSelections}: SpecSelectorProps) => {
    if (classId === WoWClassEnum.unknown || classId == null) return <></>;
    const specs = getWoWSpecsByClassId(classId);
    if (!specs) return <></>;

    const [specSelections, setSpecSelections] = useState({});

    const onSpecClick = (spec: WoWSpec) => {
     
    }

    return <div className="spec-selector">
        {specs.map(s => <img onClick={() => onSpecClick(s as WoWSpec)} className="class-icon spec-selector__icon" src={s?.icon}/>)}
    </div>
}

export default SpecSelector; 
