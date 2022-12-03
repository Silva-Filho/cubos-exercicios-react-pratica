import React from "react";

import { MusicCard } from "../MusicCard";

import styles from "./Main.module.css";

export function Main( { handlePlayMusic, musicsInfos } ) {
    const musicsList = [ ...musicsInfos ];

    return (
        <main className={ styles[ "container-main" ] }>
            <h1>The best play list</h1>

            <div className={ styles.line }></div>

            <div className={ styles[ "container-musics" ] }>
                { musicsList.map( music => (
                    <MusicCard
                        key={ music.id }
                        music={ music }
                        /* onClick={() => handlePlayMusic(music)} */
                        handlePlayMusic={ handlePlayMusic }
                    />
                ) ) }
            </div>
        </main>
    );
}
