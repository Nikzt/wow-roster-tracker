export type WoWClass = {
  name: string;
  color: string;
  specs: {[key: string]: WoWSpec}
};

export enum RolesEnum {
  Tank,
  Healer,
  DPS,
}

export type WoWSpec = {
  name: string;
  role: RolesEnum;
  melee: boolean;
};

export const WoWClassOptions: { [key: string]: WoWClass } = {
  warrior: {
    name: "Warrior",
    color: "#C69B6D",
    specs: {
      fury: {
        name: "Fury",
        role: RolesEnum.DPS,
        melee: true,
      },
    },
  },
  warlock: {
    name: "Warlock",
    color: "#8788EE",
    specs: {
      destruction: {
        name: "Destruction",
        role: RolesEnum.DPS,
        melee: false,
      },
    },
  },
  shaman: {
    name: "Shaman",
    color: "#0070DD",
    specs: {
      enhancement: {
        name: "Enhancement",
        role: RolesEnum.DPS,
        melee: true,
      },
    },
  },
  rogue: {
    name: "Rogue",
    color: "#FFF468",
    specs: {
      subtlety: {
        name: "Subtlety",
        role: RolesEnum.DPS,
        melee: true,
      },
      assassination: {
        name: "Assassination",
        role: RolesEnum.DPS,
        melee: true,
      },
      combat: {
        name: "Combat",
        role: RolesEnum.DPS,
        melee: true,
      },
    },
  },
  priest: {
    name: "Priest",
    color: "#FFFFFF",
    specs: {
      holy: {
        name: "Holy",
        role: RolesEnum.Healer,
        melee: false,
      },
      shadow: {
        name: "Shadow",
        role: RolesEnum.DPS,
        melee: false,
      },
      discipline: {
        name: "Discipline",
        role: RolesEnum.Healer,
        melee: false,
      },
    },
  },
  paladin: {
    name: "Paladin",
    color: "#F48CBA",
    specs: {
      protection: {
        name: "Protection",
        role: RolesEnum.Tank,
        melee: true,
      },
      holy: {
        name: "Holy",
        role: RolesEnum.Healer,
        melee: false,
      },
      retribution: {
        name: "Retribution",
        role: RolesEnum.DPS,
        melee: true,
      },
    },
  },
  mage: {
    name: "Mage",
    color: "#3FC7EB",
    specs: {
      frost: {
        name: "Frost",
        role: RolesEnum.DPS,
        melee: false,
      },
      fire: {
        name: "Fire",
        role: RolesEnum.DPS,
        melee: false,
      },
      arcane: {
        name: "Arcane",
        role: RolesEnum.DPS,
        melee: false,
      },
    },
  },
  hunter: {
    name: "Hunter",
    color: "#AAD372",
    specs: {
      beastMastery: {
        name: "Beast Mastery",
        role: RolesEnum.DPS,
        melee: false,
      },
      survival: {
        name: "Survival",
        role: RolesEnum.DPS,
        melee: false,
      },
      marksmanship: {
        name: "Marksmanship",
        role: RolesEnum.DPS,
        melee: false,
      },
    },
  },
  druid: {
    name: "Druid",
    color: "#FF7C0A",
    specs: {
      feralTank: {
        name: "Feral (Tank)",
        role: RolesEnum.Tank,
        melee: true,
      },
      feralDps: {
        name: "Feral (DPS)",
        role: RolesEnum.DPS,
        melee: true,
      },
      balance: {
        name: "Balance",
        role: RolesEnum.DPS,
        melee: false,
      },
      restoration: {
        name: "Restoration",
        role: RolesEnum.Healer,
        melee: true,
      },
    },
  },
  deathKnight: {
    name: "Death Knight",
    color: "#C41E3A",
    specs: {
      blood: {
        name: "Blood",
        role: RolesEnum.Tank,
        melee: true,
      },
      frost: {
        name: "Frost",
        role: RolesEnum.DPS,
        melee: true,
      },
      unholy: {
        name: "Unholy",
        role: RolesEnum.DPS,
        melee: true,
      },
    },
  },
};
