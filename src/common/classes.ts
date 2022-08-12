export enum WoWClassEnum {
  warrior,
  warlock,
  druid,
  mage,
  shaman,
  rogue,
  priest,
  paladin,
  hunter,
  deathKnight,
  unknown,
}

export enum WoWSpecEnum {
  warriorArms,
  warriorFury,
  warriorProtection,
  warlockDestruction,
  warlockDemonology,
  warlockAffliction,
  druidFeralTank,
  druidFeralDPS,
  druidBalance,
  druidRestoration,
  mageFrost,
  mageFire,
  mageArcane,
  shamanRestoration,
  shamanEnhancement,
  shamanElemental,
  rogueAssassination,
  rogueCombat,
  rogueSubtlety,
  priestHoly,
  priestDiscipline,
  priestShadow,
  paladinProtection,
  paladinRetribution,
  paladinHoly,
  hunterMarksmanship,
  hunterBeastMastery,
  hunterSurvival,
  deathKnightFrost,
  deathKnightBlood,
  deathKnightUnholy,
  unknown,
}

export enum RolesEnum {
  Tank,
  Healer,
  DPS,
  Unknown,
}

export type WoWClass = {
  name: string;
  color: string;
  icon: string;
  specs: Set<WoWSpecEnum>;
  id: WoWClassEnum;
};

export type WoWSpec = {
  name: string;
  role: RolesEnum;
  melee: boolean;
  id: WoWSpecEnum;
  icon: string;
};

export type WoWRole = {
  name: string;
  icon: string;
  color: string;
  id: RolesEnum;
}

export type WoWCharacter = {
  name: string;
  class: WoWClassEnum;
  mainSpec: WoWSpecEnum;
  offSpec?: WoWSpecEnum;
}

export type Player = {
  id: string;
  info: PlayerInfo;
  characters: WoWCharacter[];
  mainCharacterName: string;
}

export type PlayerInfo = {
  name: string;
  discord?: string;
  battleNet?: string;
}

export const getWoWClassDetails = (classEnum: WoWClassEnum) => {
  if (!WoWClassOptions[classEnum]) return null;
  return WoWClassOptions[classEnum];
}

export const getWoWSpecDetails = (specEnum: WoWSpecEnum) => {
  if (!WoWSpecOptions[specEnum]) return null;
  return WoWSpecOptions[specEnum];
}

export const getWoWRoleDetails = (roleEnum: RolesEnum) => {
  if (!WoWRoleOptions[roleEnum]) return null;
  return WoWRoleOptions[roleEnum];
}

export const getWoWClassOptionsList = () => {
  return Object.values(WoWClassOptions).filter(c => c.id !== WoWClassEnum.unknown);
}

export const getWoWClassById = (id: WoWClassEnum) => {
  if (id == null)
    return WoWClassOptions[WoWClassEnum.unknown];
  return WoWClassOptions[id];
}

export const getWoWSpecsByClassId = (classId: WoWClassEnum) => {
  const wowClass = getWoWClassDetails(classId);
  if (!wowClass) return;
  return Array.from(wowClass.specs).map(specId => getWoWSpecDetails(specId));
}

const WoWRoleOptions: {[key: number]: WoWRole} = {
  [RolesEnum.DPS]: {
    name: "DPS",
    icon: new URL("../assets/icons/dps.svg", import.meta.url).href,
    color: "#c74850",
    id: RolesEnum.DPS,
  },
  [RolesEnum.Healer]: {
    name: "Healer",
    icon: new URL("../assets/icons/healer.svg", import.meta.url).href,
    color: "#adf7b3",
    id: RolesEnum.Healer,
  },
  [RolesEnum.Tank]: {
    name: "Tank",
    icon: new URL("../assets/icons/tank.svg", import.meta.url).href,
    color: "#80b7e0",
    id: RolesEnum.Tank,
  },
}

const WoWSpecOptions: {[key: number]: WoWSpec} = {
  // Warrior
  [WoWSpecEnum.warriorArms]: {
    name: "Arms",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.warriorArms,
    icon: new URL("../assets/icons/warrior-arms.webp", import.meta.url).href,
  },
  [WoWSpecEnum.warriorFury]: {
    name: "Fury",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.warriorFury,
    icon: new URL("../assets/icons/warrior-fury.webp", import.meta.url).href,
  },
  [WoWSpecEnum.warriorProtection]: {
    name: "Protection",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.warriorProtection,
    icon: new URL("../assets/icons/warrior-protection.webp", import.meta.url).href,
  },

  // Warlock
  [WoWSpecEnum.warlockDestruction]: {
    name: "Destruction",
    role: RolesEnum.DPS,
    icon: new URL("../assets/icons/warlock-destruction.webp", import.meta.url).href,
    melee: false,
    id: WoWSpecEnum.warlockDestruction,
  },
  [WoWSpecEnum.warlockDemonology]: {
    name: "Demonology",
    role: RolesEnum.DPS,
    icon: new URL("../assets/icons/warlock-demonology.webp", import.meta.url).href,
    melee: false,
    id: WoWSpecEnum.warlockDemonology,
  },
  [WoWSpecEnum.warlockAffliction]: {
    name: "Affliction",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.warlockAffliction,
    icon: new URL("../assets/icons/warlock-affliction.webp", import.meta.url).href,
  },

  // Druid
  [WoWSpecEnum.druidFeralTank]: {
    name: "Feral (Bear)",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.druidFeralTank,
    icon: new URL("../assets/icons/druid-feral.webp", import.meta.url).href,
  },
  [WoWSpecEnum.druidFeralDPS]: {
    name: "Feral (Cat)",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.druidFeralDPS,
    icon: new URL("../assets/icons/druid-feral.webp", import.meta.url).href,
  },
  [WoWSpecEnum.druidBalance]: {
    name: "Balance",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.druidBalance,
    icon: new URL("../assets/icons/druid-balance.webp", import.meta.url).href,
  },
  [WoWSpecEnum.druidRestoration]: {
    name: "Restoration",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.druidRestoration,
    icon: new URL("../assets/icons/druid-restoration.webp", import.meta.url).href,
  },

  // Mage
  [WoWSpecEnum.mageFrost]: {
    name: "Frost",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.mageFrost,
    icon: new URL("../assets/icons/mage-frost.webp", import.meta.url).href,
  },
  [WoWSpecEnum.mageFire]: {
    name: "Fire",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.mageFire,
    icon: new URL("../assets/icons/mage-fire.webp", import.meta.url).href,
  },
  [WoWSpecEnum.mageArcane]: {
    name: "Arcane",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.mageArcane,
    icon: new URL("../assets/icons/mage-arcane.webp", import.meta.url).href,
  },

  // Shaman
  [WoWSpecEnum.shamanRestoration]: {
    name: "Restoration",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.shamanRestoration,
    icon: new URL("../assets/icons/shaman-restoration.webp", import.meta.url).href,
  },
  [WoWSpecEnum.shamanEnhancement]: {
    name: "Enhancement",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.shamanEnhancement,
    icon: new URL("../assets/icons/shaman-enhancement.webp", import.meta.url).href,
  },
  [WoWSpecEnum.shamanElemental]: {
    name: "Elemental",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.shamanElemental,
    icon: new URL("../assets/icons/shaman-elemental.webp", import.meta.url).href,
  },

  // Rogue
  [WoWSpecEnum.rogueAssassination]: {
    name: "Assassination",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.rogueAssassination,
    icon: new URL("../assets/icons/rogue-assassination.webp", import.meta.url).href,
  },
  [WoWSpecEnum.rogueCombat]: {
    name: "Combat",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.rogueCombat,
    icon: new URL("../assets/icons/rogue-combat.webp", import.meta.url).href,
  },
  [WoWSpecEnum.rogueSubtlety]: {
    name: "Subtlety",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.rogueSubtlety,
    icon: new URL("../assets/icons/rogue-subtlety.webp", import.meta.url).href,
  },

  // Priest
  [WoWSpecEnum.priestHoly]: {
    name: "Holy",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.priestHoly,
    icon: new URL("../assets/icons/priest-holy.webp", import.meta.url).href,
  },
  [WoWSpecEnum.priestDiscipline]: {
    name: "Discipline",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.priestDiscipline,
    icon: new URL("../assets/icons/priest-discipline.webp", import.meta.url).href,
  },
  [WoWSpecEnum.priestShadow]: {
    name: "Shadow",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.priestShadow,
    icon: new URL("../assets/icons/priest-shadow.webp", import.meta.url).href,
  },

  // Paladin
  [WoWSpecEnum.paladinProtection]: {
    name: "Protection",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.paladinProtection,
    icon: new URL("../assets/icons/paladin-protection.webp", import.meta.url).href,
  },
  [WoWSpecEnum.paladinRetribution]: {
    name: "Retribution",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.paladinRetribution,
    icon: new URL("../assets/icons/paladin-retribution.webp", import.meta.url).href,
  },
  [WoWSpecEnum.paladinHoly]: {
    name: "Holy",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.paladinHoly,
    icon: new URL("../assets/icons/paladin-holy.webp", import.meta.url).href,
  },

  // Hunter
  [WoWSpecEnum.hunterMarksmanship]: {
    name: "Marksmanship",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.hunterMarksmanship,
    icon: new URL("../assets/icons/hunter-marksmanship.webp", import.meta.url).href,
  },
  [WoWSpecEnum.hunterBeastMastery]: {
    name: "Beast Mastery",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.hunterBeastMastery,
    icon: new URL("../assets/icons/hunter-beast-mastery.webp", import.meta.url).href,
  },
  [WoWSpecEnum.hunterSurvival]: {
    name: "Survival",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.hunterSurvival,
    icon: new URL("../assets/icons/hunter-survival.webp", import.meta.url).href,
  },

  // Death Knight
  [WoWSpecEnum.deathKnightFrost]: {
    name: "Frost",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.deathKnightFrost,
    icon: new URL("../assets/icons/death-knight-frost.webp", import.meta.url).href,
  },
  [WoWSpecEnum.deathKnightBlood]: {
    name: "Blood",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.deathKnightBlood,
    icon: new URL("../assets/icons/death-knight-blood.webp", import.meta.url).href,
  },
  [WoWSpecEnum.deathKnightUnholy]: {
    name: "Unholy",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.deathKnightUnholy,
    icon: new URL("../assets/icons/death-knight-unholy.webp", import.meta.url).href,
  },
}

const WoWClassOptions: { [key: number]: WoWClass } = {
  [WoWClassEnum.warrior]: {
    name: "Warrior",
    color: "#C69B6D",
    icon: new URL("../assets/icons/warrior.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.warriorArms, WoWSpecEnum.warriorFury, WoWSpecEnum.warriorProtection]),
    id: WoWClassEnum.warrior,
  },
  [WoWClassEnum.warlock]: {
    name: "Warlock",
    color: "#8788EE",
    icon: new URL("../assets/icons/warlock.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.warlockAffliction, WoWSpecEnum.warlockDemonology, WoWSpecEnum.warlockDestruction]),
    id: WoWClassEnum.warlock,
  },
  [WoWClassEnum.shaman]: {
    name: "Shaman",
    color: "#0070DD",
    icon: new URL("../assets/icons/shaman.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.shamanElemental, WoWSpecEnum.shamanEnhancement, WoWSpecEnum.shamanRestoration]),
    id: WoWClassEnum.shaman,
  },
  [WoWClassEnum.rogue]: {
    name: "Rogue",
    color: "#FFF468",
    icon: new URL("../assets/icons/rogue.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.rogueCombat, WoWSpecEnum.rogueSubtlety, WoWSpecEnum.rogueAssassination]),
    id: WoWClassEnum.rogue,
  },
  [WoWClassEnum.priest]: {
    name: "Priest",
    color: "#FFFFFF",
    icon: new URL("../assets/icons/priest.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.priestHoly, WoWSpecEnum.priestShadow, WoWSpecEnum.priestDiscipline]),
    id: WoWClassEnum.priest,
  },
  [WoWClassEnum.paladin]: {
    name: "Paladin",
    color: "#F48CBA",
    icon: new URL("../assets/icons/paladin.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.paladinHoly, WoWSpecEnum.paladinProtection, WoWSpecEnum.paladinRetribution]),
    id: WoWClassEnum.paladin,
  },
  [WoWClassEnum.mage]: {
    name: "Mage",
    color: "#3FC7EB",
    icon: new URL("../assets/icons/mage.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.mageFire, WoWSpecEnum.mageFrost, WoWSpecEnum.mageArcane]),
    id: WoWClassEnum.mage,
  },
  [WoWClassEnum.hunter]: {
    name: "Hunter",
    color: "#AAD372",
    icon: new URL("../assets/icons/hunter.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.hunterSurvival, WoWSpecEnum.hunterBeastMastery, WoWSpecEnum.hunterMarksmanship]),
    id: WoWClassEnum.hunter,
  },
  [WoWClassEnum.druid]: {
    name: "Druid",
    color: "#FF7C0A",
    icon: new URL("../assets/icons/druid.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.druidRestoration, WoWSpecEnum.druidBalance, WoWSpecEnum.druidFeralTank, WoWSpecEnum.druidFeralDPS]),
    id: WoWClassEnum.druid,
  },
  [WoWClassEnum.deathKnight]: {
    name: "Death Knight",
    color: "#C41E3A",
    icon: new URL("../assets/icons/death-knight.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.deathKnightBlood, WoWSpecEnum.deathKnightFrost, WoWSpecEnum.deathKnightUnholy]),
    id: WoWClassEnum.deathKnight,
  },
  [WoWClassEnum.unknown]: {
    name: "Select Class",
    color: "#eeeeff",
    icon: new URL("../assets/icons/unknown.jpg", import.meta.url).href,
    specs: new Set(),
    id: WoWClassEnum.unknown,
  },
};

Object.freeze(WoWClassOptions);
Object.freeze(WoWSpecOptions);
Object.freeze(WoWRoleOptions);
