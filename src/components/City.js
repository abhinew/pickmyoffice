import React from 'react';

export function City({ city }) {
    return (
        <div className="pokemon">
            <div className="pokemon__name">
                <p>{city.title}</p>
            </div>
            <div className="pokemon__meta">
                <span>{city.title}</span>
                <span>{city.title}</span>
            </div>
            {/* <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div> */}
            {/* <div className="pokemon__attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                ))}
            </div> */}
        </div>
    )
}