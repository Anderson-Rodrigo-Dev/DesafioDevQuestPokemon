import { useEffect, useState } from "react";
import { getAbility } from "../../hooks/getAbility/useAbility";

const Ability = ({ pokemon, index }) => {
  const [ability, setAbility] = useState();

  useEffect(() => {
    const fetchAbility = async () => {
      const abilityInfo = await getAbility(pokemon.ability.url);
      setAbility(abilityInfo);
    };
    fetchAbility();
  }, [pokemon.ability.url]);

  if (ability !== undefined) {
    return (
      <li className="ability">
        <h3 style={{ margin: "10px 0" }}>
          {pokemon.ability.name.substring(0, 1).toUpperCase()}
          {pokemon.ability.name.substring(1)}
        </h3>
        {/* eslint-disable-next-line*/}
        {ability.effect_entries.map((e, index) => {
          if (e.language.name === "en") {
            return <p key={index}>{e.effect}</p>;
          }
        })}
      </li>
    );
  }
};

export { Ability };
