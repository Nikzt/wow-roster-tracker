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
}

export enum RolesEnum {
  Tank,
  Healer,
  DPS,
}

export type WoWClass = {
  name: string;
  color: string;
  icon: string;
  specs: Set<WoWSpecEnum>
};

export type WoWSpec = {
  name: string;
  role: RolesEnum;
  melee: boolean;
};

export type WoWRole = {
  name: string;
  icon: string;
}

export type WoWCharacter = {
  name: string;
  class: WoWClassEnum;
  mainSpec: WoWSpecEnum;
  offSpec?: WoWSpecEnum;
}

export type Player = {
  name: string;
  characters: WoWCharacter[];
  mainCharacterName: string;
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


const WoWRoleOptions: {[key: number]: WoWRole} = {
  [RolesEnum.DPS]: {
    name: "DPS",
    icon: new URL("../assets/icons/dps.svg", import.meta.url).href,
  },
  [RolesEnum.Healer]: {
    name: "Healer",
    icon: new URL("../assets/icons/healer.svg", import.meta.url).href,
  },
  [RolesEnum.Tank]: {
    name: "Tank",
    icon: new URL("../assets/icons/tank.svg", import.meta.url).href,
  },
}

const WoWSpecOptions: {[key: number]: WoWSpec} = {
  // Warrior
  [WoWSpecEnum.warriorArms]: {
    name: "Arms",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.warriorFury]: {
    name: "Fury",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.warriorProtection]: {
    name: "Protection",
    role: RolesEnum.Tank,
    melee: true,
  },

  // Warlock
  [WoWSpecEnum.warlockDestruction]: {
    name: "Destruction",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.warlockDemonology]: {
    name: "Demonology",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.warlockAffliction]: {
    name: "Affliction",
    role: RolesEnum.DPS,
    melee: false,
  },

  // Druid
  [WoWSpecEnum.druidFeralTank]: {
    name: "Feral (Bear)",
    role: RolesEnum.Tank,
    melee: true,
  },
  [WoWSpecEnum.druidFeralDPS]: {
    name: "Feral (Cat)",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.druidBalance]: {
    name: "Balance",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.druidRestoration]: {
    name: "Restoration",
    role: RolesEnum.Healer,
    melee: false,
  },

  // Mage
  [WoWSpecEnum.mageFrost]: {
    name: "Frost",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.mageFire]: {
    name: "Fire",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.mageArcane]: {
    name: "Arcane",
    role: RolesEnum.DPS,
    melee: false,
  },

  // Shaman
  [WoWSpecEnum.shamanRestoration]: {
    name: "Restoration",
    role: RolesEnum.Healer,
    melee: false,
  },
  [WoWSpecEnum.shamanEnhancement]: {
    name: "Enhancement",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.shamanElemental]: {
    name: "Elemental",
    role: RolesEnum.DPS,
    melee: false,
  },

  // Rogue
  [WoWSpecEnum.rogueAssassination]: {
    name: "Assassination",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.rogueCombat]: {
    name: "Combat",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.rogueSubtlety]: {
    name: "Subtlety",
    role: RolesEnum.DPS,
    melee: true,
  },

  // Priest
  [WoWSpecEnum.priestHoly]: {
    name: "Holy",
    role: RolesEnum.Healer,
    melee: false,
  },
  [WoWSpecEnum.priestDiscipline]: {
    name: "Discipline",
    role: RolesEnum.Healer,
    melee: false,
  },
  [WoWSpecEnum.priestShadow]: {
    name: "Shadow",
    role: RolesEnum.DPS,
    melee: false,
  },

  // Paladin
  [WoWSpecEnum.paladinProtection]: {
    name: "Protection",
    role: RolesEnum.Tank,
    melee: true,
  },
  [WoWSpecEnum.paladinRetribution]: {
    name: "Retribution",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.paladinHoly]: {
    name: "Holy",
    role: RolesEnum.Healer,
    melee: false,
  },

  // Hunter
  [WoWSpecEnum.hunterMarksmanship]: {
    name: "Marksmanship",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.hunterBeastMastery]: {
    name: "Beast Mastery",
    role: RolesEnum.DPS,
    melee: false,
  },
  [WoWSpecEnum.hunterSurvival]: {
    name: "Survival",
    role: RolesEnum.DPS,
    melee: false,
  },

  // Death Knight
  [WoWSpecEnum.deathKnightFrost]: {
    name: "Frost",
    role: RolesEnum.DPS,
    melee: true,
  },
  [WoWSpecEnum.deathKnightBlood]: {
    name: "Blood",
    role: RolesEnum.Tank,
    melee: true,
  },
  [WoWSpecEnum.deathKnightUnholy]: {
    name: "Unholy",
    role: RolesEnum.DPS,
    melee: true,
  },
}

const WoWClassOptions: { [key: number]: WoWClass } = {
  [WoWClassEnum.warrior]: {
    name: "Warrior",
    color: "#C69B6D",
    icon: new URL("../assets/icons/warrior.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.warriorArms, WoWSpecEnum.warriorFury, WoWSpecEnum.warriorProtection]),
  },
  [WoWClassEnum.warlock]: {
    name: "Warlock",
    color: "#8788EE",
    icon: new URL("../assets/icons/warlock.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.warlockAffliction, WoWSpecEnum.warlockDemonology, WoWSpecEnum.warlockDestruction]),
  },
  [WoWClassEnum.shaman]: {
    name: "Shaman",
    color: "#0070DD",
    icon: new URL("../assets/icons/shaman.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.shamanElemental, WoWSpecEnum.shamanEnhancement, WoWSpecEnum.shamanRestoration]),
  },
  [WoWClassEnum.rogue]: {
    name: "Rogue",
    color: "#FFF468",
    icon: new URL("../assets/icons/rogue.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.rogueCombat, WoWSpecEnum.rogueSubtlety, WoWSpecEnum.rogueAssassination]),
  },
  [WoWClassEnum.priest]: {
    name: "Priest",
    color: "#FFFFFF",
    icon: new URL("../assets/icons/priest.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.priestHoly, WoWSpecEnum.priestShadow, WoWSpecEnum.priestDiscipline]),
  },
  [WoWClassEnum.paladin]: {
    name: "Paladin",
    color: "#F48CBA",
    icon: new URL("../assets/icons/paladin.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.paladinHoly, WoWSpecEnum.paladinProtection, WoWSpecEnum.paladinRetribution]),
  },
  [WoWClassEnum.mage]: {
    name: "Mage",
    color: "#3FC7EB",
    icon: new URL("../assets/icons/mage.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.mageFire, WoWSpecEnum.mageFrost, WoWSpecEnum.mageArcane]),
  },
  [WoWClassEnum.hunter]: {
    name: "Hunter",
    color: "#AAD372",
    icon: new URL("../assets/icons/hunter.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.hunterSurvival, WoWSpecEnum.hunterBeastMastery, WoWSpecEnum.hunterMarksmanship]),
  },
  [WoWClassEnum.druid]: {
    name: "Druid",
    color: "#FF7C0A",
    icon: new URL("../assets/icons/druid.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.druidFeral, WoWSpecEnum.druidBalance, WoWSpecEnum.druidFeralTank, WoWSpecEnum.druidFeralDPS]),
  },
  [WoWClassEnum.deathKnight]: {
    name: "Death Knight",
    color: "#C41E3A",
    icon: new URL("../assets/icons/death-knight.webp", import.meta.url).href,
    specs: new Set([WoWSpecEnum.deathKnightBlood, WoWSpecEnum.deathKnightFrost, WoWSpecEnum.deathKnightUnholy]),
  },
};

Object.freeze(WoWClassOptions);
Object.freeze(WoWSpecOptions);
Object.freeze(WoWRoleOptions);
