import React from "react";

import styles from "./MusicCard.module.css";

export function MusicCard( { handlePlayMusic, music } ) {
    return (
        <div
            aria-label={ `music card 0${ music.id }` }
            data-testid={ `music card 0${ music.id }` }
            className={ styles[ "music-card" ] }
            onClick={ () => handlePlayMusic( music ) }
        >
            <img src={ music.cover } alt={ music.title } />

            <h2>{ music.title }</h2>

            <p>{ music.description }</p>
        </div>
    );
};
