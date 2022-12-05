import React, { useEffect, useRef, useState } from "react";

// @ts-ignore
import NextButton from "../../assets/next.svg";
// @ts-ignore
import PauseButton from "../../assets/pause.svg";
// @ts-ignore
import PlayButton from "../../assets/play.svg";
// @ts-ignore
import PreviousButton from "../../assets/previous.svg";
// @ts-ignore
import StopButton from "../../assets/stop.svg";

import styles from "./Footer.module.css";

export function Footer( { handlePlayMusic, isPlaying, music, musicsInfos, setIsPlaying } ) {
    const [ musicCurrentTime, setMusicCurrentTime ] = useState( 0 );
    const audioRef = useRef( null );
    /* const progressLineRef = useRef(null); */
    const progressInputRef = useRef( null );
    const animationRef = useRef( null );
    const musicsList = [ ...musicsInfos ];

    let posicaoAtual = music?.id;
    /* let idInterval = null; */
    /* let musicCurrentTime = 0; */

    useEffect( () => {
        // @ts-ignore
        const seconds = Math.floor( audioRef.current?.duration );
        // @ts-ignore
        progressInputRef.current.max = seconds;
        // @ts-ignore
    }, [ audioRef?.current?.loadedmetadata, audioRef?.current?.readyState ] );

    function handlePause() {
        // @ts-ignore
        audioRef.current.pause();
        setIsPlaying( false );
        /* if (audioRef.current.pause) {
            clearInterval(idInterval);
        } */
        // @ts-ignore
        cancelAnimationFrame( animationRef.current );
    }

    function handlePlay() {
        // @ts-ignore
        audioRef.current.play();
        setIsPlaying( true );
        /*  handleProgress(); */
        // @ts-ignore
        animationRef.current = requestAnimationFrame( whilePlaying );
    }

    function handleStop() {
        // @ts-ignore
        audioRef.current.pause();
        // @ts-ignore
        audioRef.current.currentTime = 0;
        setIsPlaying( false );
    }

    function handlePrevious() {
        posicaoAtual -= 1;

        if ( posicaoAtual < 1 ) {
            posicaoAtual = musicsList.length;
        }

        const tmpMusic = musicsList.find( item => {
            return item.id === posicaoAtual;
        } );

        handlePlayMusic( tmpMusic );
        /* setIsPlaying(false); */
        handleStop();
    }

    function handleNext() {
        posicaoAtual += 1;

        if ( posicaoAtual > musicsInfos.length ) {
            posicaoAtual = 1;
        }

        const tmpMusic = musicsInfos.find( item => {
            return item.id === posicaoAtual;
        } );

        handlePlayMusic( tmpMusic );
        /* setIsPlaying(false); */
        handleStop();
    }

    /* function handleProgress() {
        idInterval = setInterval(() => {
            setMusicCurrentTime(audioRef.current.currentTime);

            const duration = audioRef.current.duration / 60;
            const currentProgress = ((audioRef.current.currentTime / 60) * 100) / duration;
            
            progressLineRef.current.style.width = `${currentProgress}%`;
        }, 1000);
    } */

    function handleChangeProgress() {
        // @ts-ignore
        audioRef.current.currentTime = progressInputRef.current.value;
        changePlayerCurrentTime();
    }

    function whilePlaying() {
        // @ts-ignore
        progressInputRef.current.value = audioRef.current.currentTime;
        changePlayerCurrentTime();
        // @ts-ignore
        animationRef.current = requestAnimationFrame( whilePlaying );
    }

    function changePlayerCurrentTime() {
        // @ts-ignore
        progressInputRef.current.style.setProperty(
            "--seek-before-width",
            // @ts-ignore
            `${ progressInputRef.current.value / audioRef.current.duration * 100 }%`
        );
        // @ts-ignore
        setMusicCurrentTime( progressInputRef.current.value );
        handleChangeButtonPlayPause();
    }

    function handleFormatTime( musicTime ) {
        if ( isNaN( musicTime ) ) {
            return "00:00";
        }
        const mins = Math.floor( musicTime / 60 );
        const secs = Math.floor( musicTime % 60 );

        const timeString = `${ String( mins ).padStart( 2, "0" ) }:${ String( secs ).padStart( 2, "0" ) }`;

        return timeString;
    }

    function handleChangeButtonPlayPause() {
        // @ts-ignore
        if ( audioRef.current.ended ) {
            setIsPlaying( false );
        }
    }

    return (
        <footer className={ styles[ "container-footer" ] }>
            <div className={ styles[ "music-info" ] }>
                <h2 data-testid="music-playing-title">
                    { music ? music.title : "" }
                </h2>

                <span data-testid="music-playing-artist">
                    { music ? music.artist : "" }
                </span>
            </div>

            <div className={ styles[ "music-player" ] }>
                { music &&
                    <audio src={ music ? music.url : "" } ref={ audioRef } preload="metadata" />
                }

                <div className={ styles.controls }>
                    <button
                        type="button"
                        disabled={ !music }
                        onClick={ () => handleStop() }
                    >
                        <img
                            src={ StopButton }
                            alt="stop button"
                        />
                    </button>

                    <button
                        type="button"
                        disabled={ !music }
                        onClick={ () => handlePrevious() }
                    >
                        <img
                            src={ PreviousButton }
                            alt="previous button"
                        />
                    </button>

                    <button
                        data-testid="play-pause-button"
                        className={ styles[ "principal-button" ] }
                        type="button"
                        disabled={ !music }
                        onClick={ () => isPlaying ? handlePause() : handlePlay() }
                    >
                        { isPlaying ?
                            <img
                                src={ PauseButton }
                                alt="pause button"
                            /> :
                            <img
                                src={ PlayButton }
                                alt="play button"
                            />
                        }
                    </button>

                    <button
                        type="button"
                        disabled={ !music }
                        onClick={ () => handleNext() }
                    >
                        <img
                            src={ NextButton }
                            alt="next button"
                        />
                    </button>
                </div>

                <div className={ styles[ "progress-container" ] }>
                    {/* <span>{handleFormatTime(audioRef.current?.currentTime ?? 0)}</span> */ }
                    <span data-testid="music-current-time" >
                        { handleFormatTime( musicCurrentTime ) }
                    </span>

                    {/* <div className="progress-line">
                        <div className="line" ></div>

                        <div 
                            className="line-progressed" 
                            ref={progressLineRef} 
                        ></div>
                    </div> */}

                    <input
                        data-testid="music-progress-line"
                        type="range"
                        defaultValue="0"
                        ref={ progressInputRef }
                        onChange={ handleChangeProgress }
                        disabled={ !music }
                    />

                    <span data-testid="music-duration" >
                        { handleFormatTime(
                            // @ts-ignore
                            audioRef?.current?.duration ?? 0
                        ) }
                    </span>
                </div>
            </div>
        </footer>
    );
}
