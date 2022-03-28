import { useState } from 'react';

import { musics } from '../../data/musics';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

import './styles.css';

export function Home() {
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    const [musicsInfos, setMusicsInfos] = useState([...musics]);
    const [music, setMusic] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    /* const inicial = 0;
    const final = musicsInfos.length; */
    //const musicPlayer = {
        //music,
        //setMusic: setMusic(),
        //isPlaying,
        /* Deve-se criar uma fç se quiser usar. */
        //setIsPlaying: setIsPlaying(false)
    //};

    function handlePlayMusic(musicPlay) {
        setMusic(musicPlay);
        setIsPlaying(false);
        /* console.log(musicPlay);
        console.log();
        console.log(music); */
    }

    return (
        <div className="container">
            <Header />

            <Main musicsInfos={musicsInfos} handlePlayMusic={handlePlayMusic} />

            {/* <Footer music={music} inicial={inicial} final={final} /> */}
            <Footer 
                music={music} 
                musicsInfos={musicsInfos} 
                handlePlayMusic={handlePlayMusic} 
                /* musicPlayer={musicPlayer} */
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
            />
        </div>
    );
}
