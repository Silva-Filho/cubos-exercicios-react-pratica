import React, { useState } from "react";

import { 
    act, 
    cleanup, 
    render, 
    renderHook, 
    screen, 
    userEvent, 
    waitFor 
} from "../../tests";

import { musics } from "../../data/musics";

import { Footer } from "./index";

describe( "component Footer - layout", () => {
    beforeEach( () => {
        const { result } = renderHook( () => {
            const [ isPlaying, setIsPlaying ] = useState( false );

            return {
                isPlaying,
                setIsPlaying,
            };
        } );
        const musicsInfos = [ ...musics ];
        const handlePlayMusic = jest.fn();
        const music = {};

        render( <Footer
            music={ music }
            musicsInfos={ musicsInfos }
            handlePlayMusic={ handlePlayMusic }
            isPlaying={ result.current.isPlaying }
            setIsPlaying={ result.current.setIsPlaying }
        /> );
    } );

    it( "should display music-infos H2 and SPAN without content", () => {
        const h2Element = screen.getByTestId( /playing-title/i );
        const spanElement = screen.getByTestId( /playing-artist/i );

        expect( h2Element ).toBeEmptyDOMElement();
        expect( spanElement ).toBeEmptyDOMElement();
    } );

    it( "should display the controls stop, previous, play and next", () => {
        const [
            stopImg,
            previousImg,
            playImg,
            nextImg
        ] = screen.getAllByRole( "img" );

        expect( stopImg ).toBeInTheDocument();
        expect( previousImg ).toBeInTheDocument();
        expect( playImg ).toBeInTheDocument();
        expect( nextImg ).toBeInTheDocument();
    } );

    it( "should display elements of music progress container", () => {
        const spanCurrentTime = screen.getByTestId( /current-time/i );
        const inputElement = screen.getByRole( "slider" );
        const spanDuration = screen.getByTestId( /music-duration/i );

        expect( spanCurrentTime ).toBeInTheDocument();
        expect( inputElement ).toBeInTheDocument();
        expect( spanDuration ).toBeInTheDocument();
    } );
} );


