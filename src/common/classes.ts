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
  },
  [WoWSpecEnum.warriorFury]: {
    name: "Fury",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.warriorFury,
  },
  [WoWSpecEnum.warriorProtection]: {
    name: "Protection",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.warriorProtection,
  },

  // Warlock
  [WoWSpecEnum.warlockDestruction]: {
    name: "Destruction",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.warlockDestruction,
  },
  [WoWSpecEnum.warlockDemonology]: {
    name: "Demonology",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.warlockDemonology,
  },
  [WoWSpecEnum.warlockAffliction]: {
    name: "Affliction",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.warlockAffliction,
  },

  // Druid
  [WoWSpecEnum.druidFeralTank]: {
    name: "Feral (Bear)",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.druidFeralTank,
  },
  [WoWSpecEnum.druidFeralDPS]: {
    name: "Feral (Cat)",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.druidFeralDPS,
  },
  [WoWSpecEnum.druidBalance]: {
    name: "Balance",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.druidBalance,
  },
  [WoWSpecEnum.druidRestoration]: {
    name: "Restoration",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.druidRestoration,
  },

  // Mage
  [WoWSpecEnum.mageFrost]: {
    name: "Frost",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.mageFrost,
  },
  [WoWSpecEnum.mageFire]: {
    name: "Fire",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.mageFire,
  },
  [WoWSpecEnum.mageArcane]: {
    name: "Arcane",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.mageArcane,
  },

  // Shaman
  [WoWSpecEnum.shamanRestoration]: {
    name: "Restoration",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.shamanRestoration,
  },
  [WoWSpecEnum.shamanEnhancement]: {
    name: "Enhancement",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.shamanEnhancement,
  },
  [WoWSpecEnum.shamanElemental]: {
    name: "Elemental",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.shamanElemental,
  },

  // Rogue
  [WoWSpecEnum.rogueAssassination]: {
    name: "Assassination",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.rogueAssassination,
  },
  [WoWSpecEnum.rogueCombat]: {
    name: "Combat",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.rogueCombat,
  },
  [WoWSpecEnum.rogueSubtlety]: {
    name: "Subtlety",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.rogueSubtlety,
  },

  // Priest
  [WoWSpecEnum.priestHoly]: {
    name: "Holy",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.priestHoly,
  },
  [WoWSpecEnum.priestDiscipline]: {
    name: "Discipline",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.priestDiscipline,
  },
  [WoWSpecEnum.priestShadow]: {
    name: "Shadow",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.priestShadow,
  },

  // Paladin
  [WoWSpecEnum.paladinProtection]: {
    name: "Protection",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.paladinProtection,
  },
  [WoWSpecEnum.paladinRetribution]: {
    name: "Retribution",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.paladinRetribution,
  },
  [WoWSpecEnum.paladinHoly]: {
    name: "Holy",
    role: RolesEnum.Healer,
    melee: false,
    id: WoWSpecEnum.paladinHoly,
  },

  // Hunter
  [WoWSpecEnum.hunterMarksmanship]: {
    name: "Marksmanship",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.hunterMarksmanship,
  },
  [WoWSpecEnum.hunterBeastMastery]: {
    name: "Beast Mastery",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.hunterBeastMastery,
  },
  [WoWSpecEnum.hunterSurvival]: {
    name: "Survival",
    role: RolesEnum.DPS,
    melee: false,
    id: WoWSpecEnum.hunterSurvival,
  },

  // Death Knight
  [WoWSpecEnum.deathKnightFrost]: {
    name: "Frost",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.deathKnightFrost,
  },
  [WoWSpecEnum.deathKnightBlood]: {
    name: "Blood",
    role: RolesEnum.Tank,
    melee: true,
    id: WoWSpecEnum.deathKnightBlood,
  },
  [WoWSpecEnum.deathKnightUnholy]: {
    name: "Unholy",
    role: RolesEnum.DPS,
    melee: true,
    id: WoWSpecEnum.deathKnightUnholy,
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
