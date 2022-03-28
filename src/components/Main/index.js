import { MusicCard } from "../MusicCard";

import "./style.css";

export function Main({ handlePlayMusic, musicsInfos }) {
    const musicsList = [...musicsInfos];

    return (
        <div className="container-main">
            <h1>The best play list</h1>
            
            <div className="line"></div>

            <div className="container-musics">
                { musicsList.map( music => (
                    <MusicCard 
                        key={music.id} 
                        music={music} 
                        /* onClick={() => handlePlayMusic(music)} */
                        handlePlayMusic={handlePlayMusic}
                    />
                ) ) }
            </div>
        </div>
    );
}
