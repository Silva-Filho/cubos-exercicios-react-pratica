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

describe( "component Footer - user behavior", () => {
    const { result, rerender } = renderHook( () => {
        const [ isPlaying, setIsPlaying ] = useState( false );

        return {
            isPlaying,
            setIsPlaying,
        };
    } );

    beforeEach( () => {
        rerender();

        const musicsInfos = [ ...musics ];
        const handlePlayMusic = jest.fn();
        const music = musicsInfos[ 1 ];

        render( <Footer
            music={ music }
            musicsInfos={ musicsInfos }
            handlePlayMusic={ handlePlayMusic }
            isPlaying={ result.current.isPlaying }
            setIsPlaying={ result.current.setIsPlaying }
        /> );
    } );

    afterEach( () => {
        act( () => {
            result.current.setIsPlaying( false );
        } );
        
        cleanup();
    } );

    it( "should play music when user click at playButton", async () => {
        const playButton = screen.getByRole( "button", { name: /play/i } );

        expect( result.current.isPlaying ).toBeFalsy();

        await userEvent.click( playButton );

        expect( result.current.isPlaying ).toBeTruthy();
    } );
     
    it.todo( "should pause music when user click at pauseButton", async () => {
        // const playButton = screen.getByRole( "button", { name: /play/i } );
        // const playButton = screen.getByTestId( /play/i );
        const playButton = screen.getByTestId( "play-pause-button" );
        // const playButton = await screen.findByTestId( /play/i );
        // console.log( { playButton } );

        expect( result.current.isPlaying ).toBeFalsy();
        /* expect( playButton )
            .toHaveAttribute(
                "src",
                expect.stringMatching( /play/i )
            ); */

        await waitFor( () => userEvent.click( playButton ) );
        // await userEvent.click( playButton );

        expect( result.current.isPlaying ).toBeTruthy();

        // screen.debug();

        /* await waitFor( () => {
            expect( playButton )
                .not
                .toHaveAttribute(
                    "src",
                    expect.stringMatching( /play/i )
                );
        } ); */

        // const pauseButton = screen.getByRole( "button", { name: /pause/i } );
        // const pauseButton = await screen.findByRole( "button", { name: /pause/i } );
        // const pauseButton = screen.queryByRole( "button", { name: /pause/i } );
        // let pauseButton;

        /* await waitFor( () => {
            pauseButton = 

            expect( pauseButton ).not.toBeInTheDocument();
        } ); */

        /* await userEvent.click( pauseButton );

        expect( result.current.isPlaying ).toBeFalsy(); */
        /* await waitFor( async () => {
            expect( result.current.isPlaying ).toBeFalsy();
        } ); */
    } );

    it( "should stop music when user click at stopButton", async () => {
        const playButton = screen.getByRole( "button", { name: /play/i } );

        expect( result.current.isPlaying ).toBeFalsy();

        await userEvent.click( playButton );

        expect( result.current.isPlaying ).toBeTruthy();

        const stopButton = screen.getByRole( "button", { name: /stop/i } );

        await userEvent.click( stopButton );

        expect( result.current.isPlaying ).toBeFalsy();
    } );

    it( "should change to previous music when user click at previousButton", async () => {
        const playButton = screen.getByRole( "button", { name: /play/i } );

        expect( result.current.isPlaying ).toBeFalsy();

        await userEvent.click( playButton );

        expect( result.current.isPlaying ).toBeTruthy();

        const previousButton = screen.getByRole( "button", { name: /previous/i } );

        await userEvent.click( previousButton );

        expect( result.current.isPlaying ).toBeFalsy();
    } );

    it( "should change to previous music when user click at previousButton more than one time", async () => {
        const previousButton = screen.getByRole( "button", { name: /previous/i } );

        await userEvent.click( previousButton );
        await userEvent.click( previousButton );
        await userEvent.click( previousButton );

        expect( result.current.isPlaying ).toBeFalsy();
    } );

    it( "should change to next music when user click at nextButton", async () => {
        const nextButton = screen.getByRole( "button", { name: /next/i } );

        await userEvent.click( nextButton );

        expect( result.current.isPlaying ).toBeFalsy();
    } );

    it( "should change to next music when user click at nextButton more than one time", async () => {
        const nextButton = screen.getByRole( "button", { name: /next/i } );

        await userEvent.click( nextButton );
        await userEvent.click( nextButton );
        await userEvent.click( nextButton );

        expect( result.current.isPlaying ).toBeFalsy();
    } );
} );
