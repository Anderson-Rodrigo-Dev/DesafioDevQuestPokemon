import React from "react";

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from 'react-icons/md';

import Iconbug from "../../icons/bug.svg"
import Icondark from "../../icons/dark.svg"
import Icondragon from "../../icons/dragon.svg"
import Iconelectric from "../../icons/electric.svg"
import Iconfairy from "../../icons/fairy.svg"
import Iconfighting from "../../icons/fighting.svg"
import Iconfire from "../../icons/fire.svg";
import Iconflying from "../../icons/flying.svg"
import Iconghost from "../../icons/ghost.svg"
import Icongrass from "../../icons/grass.svg"
import Iconground from "../../icons/ground.svg"
import Iconice from "../../icons/ice.svg"
import Iconnormal from "../../icons/normal.svg"
import Iconpoison from "../../icons/poison.svg"
import Iconpsychic from "../../icons/psychic.svg"
import Iconrock from "../../icons/rock.svg"
import Iconsteel from "../../icons/steel.svg"
import Iconwater from "../../icons/water.svg"


export const SidebarData = [
  {
    title: "Início",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Tipos",
    path: "#",
    icon: <MdIcons.MdCatchingPokemon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Bug",
        path: "/pokemons/bug",
        icon: Iconbug,
      },
      {
        title: "Dark",
        path: "/pokemons/dark",
        icon: Icondark,
      },
      {
        title: "Dragon",
        path: "/pokemons/dragon",
        icon: Icondragon,
      },
      {
        title: "Electric",
        path: "/pokemons/electric",
        icon: Iconelectric,
      },
      {
        title: "Fairy",
        path: "/pokemons/fairy",
        icon: Iconfairy,
      },
      {
        title: "Fighting",
        path: "/pokemons/fighting",
        icon: Iconfighting,
      },
      {
        title: "Fire",
        path: "/pokemons/fire",
        icon: Iconfire,
      },
      {
        title: "Flying",
        path: "/pokemons/flying",
        icon: Iconflying,
      },
      {
        title: "Ghost",
        path: "/pokemons/ghost",
        icon: Iconghost,
      },
      {
        title: "Grass",
        path: "/pokemons/grass",
        icon: Icongrass,
      },
      {
        title: "Ground",
        path: "/pokemons/ground",
        icon: Iconground,
      },
      {
        title: "Ice",
        path: "/pokemons/ice",
        icon: Iconice,
      },
      {
        title: "Normal",
        path: "/pokemons/normal",
        icon: Iconnormal,
      },
      {
        title: "Poison",
        path: "/pokemons/poison",
        icon: Iconpoison,
      },
      {
        title: "Psychic",
        path: "/pokemons/psychic",
        icon: Iconpsychic,
      },
      {
        title: "Rock",
        path: "/pokemons/rock",
        icon: Iconrock,
      },
      {
        title: "Steel",
        path: "/pokemons/steel",
        icon: Iconsteel,
      },
      {
        title: "Water",
        path: "/pokemons/water",
        icon: Iconwater,
      },
    ],
  },
  {
    title: "Contato",
    path: "#",
    icon: <MdIcons.MdPermContactCalendar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Facebook",
        path: "/contato/facebook",
      },
      {
        title: "Instagram",
        path: "/contato/instagram",
      },
      {
        title: "LinkedIn",
        path: "/contato/linkedin",
      },
      {
        title: "GitHub",
        path: "/contato/github",
      },
    ]
  },
];
