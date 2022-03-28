import "./style.css";

export function MusicCard({ handlePlayMusic, music }) {
    return (
        <div 
            className="music-card" 
            onClick={() => handlePlayMusic(music)}
        >
            <img src={music.cover} alt={music.title} />

            <h2>{music.title}</h2>

            <p>{music.description}</p>
        </div>
    );
};
