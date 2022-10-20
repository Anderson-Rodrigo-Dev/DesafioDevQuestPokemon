import React from "react";

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from 'react-icons/md';

import Iconbug from "../../assets/icons/bug.svg"
import Icondark from "../../assets/icons/dark.svg"
import Icondragon from "../../assets/icons/dragon.svg"
import Iconelectric from "../../assets/icons/electric.svg"
import Iconfairy from "../../assets/icons/fairy.svg"
import Iconfighting from "../../assets/icons/fighting.svg"
import Iconfire from "../../assets/icons/fire.svg";
import Iconflying from "../../assets/icons/flying.svg"
import Iconghost from "../../assets/icons/ghost.svg"
import Icongrass from "../../assets/icons/grass.svg"
import Iconground from "../../assets/icons/ground.svg"
import Iconice from "../../assets/icons/ice.svg"
import Iconnormal from "../../assets/icons/normal.svg"
import Iconpoison from "../../assets/icons/poison.svg"
import Iconpsychic from "../../assets/icons/psychic.svg"
import Iconrock from "../../assets/icons/rock.svg"
import Iconsteel from "../../assets/icons/steel.svg"
import Iconwater from "../../assets/icons/water.svg"


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
