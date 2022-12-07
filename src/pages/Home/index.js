import React, { useState } from "react";

import { musics } from "../../data/musics";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import styles from "./Home.module.css";

export function Home() {
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    const [ musicsInfos, setMusicsInfos ] = useState( [ ...musics ] );
    const [ music, setMusic ] = useState( null );
    const [ isPlaying, setIsPlaying ] = useState( false );

    /* const inicial = 0;
    const final = musicsInfos.length; */
    /* const musicPlayer = {
        music,
        setMusic: setMusic( this.music ),
        isPlaying,
        // Deve-se criar uma fç se quiser usar.
        // setIsPlaying: setIsPlaying( false )
        setIsPlaying: setIsPlaying( !this.isPlaying )
    }; */

    function handlePlayMusic( musicPlay ) {
        setMusic( musicPlay );
        setIsPlaying( false );
    }

    return (
        <div className={styles.container}>
            <Header />

            <Main musicsInfos={ musicsInfos } handlePlayMusic={ handlePlayMusic } />

            <Footer
                music={ music }
                musicsInfos={ musicsInfos }
                handlePlayMusic={ handlePlayMusic }
                /* musicPlayer={musicPlayer} */
                isPlaying={ isPlaying }
                setIsPlaying={ setIsPlaying }
            />
        </div>
    );
}
