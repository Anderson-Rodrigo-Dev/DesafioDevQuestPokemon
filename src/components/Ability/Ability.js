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

  return (
    <>
      {ability && (
        <li className="ability">
          <h4 style={{ marginTop: "30px", fontSize: "1.8rem" }}>
            {pokemon.ability.name.substring(0, 1).toUpperCase()}
            {pokemon.ability.name.substring(1)}
          </h4>
          {/* eslint-disable-next-line*/}
          {ability.effect_entries.map((e, index) => {
            if (e.language.name === "en") {
              return (
                <p key={index} style={{ fontSize: "1.6rem" }}>
                  {e.effect}
                </p>
              );
            }
          })}
        </li>
      )}
    </>
  );
};

export { Ability };
