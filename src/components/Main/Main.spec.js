import React from "react";

import { render, screen, userEvent } from "../../tests";

import { musics as musicsInfos } from "../../data/musics";

import { Main } from "./index";

describe( "component Main - layout", () => {
    it( "should display H1", () => {
        const musicsList = [ ...musicsInfos ];
        const handlePlayMusic = jest.fn();

        render(
            <Main
                musicsInfos={ musicsList }
                handlePlayMusic={ handlePlayMusic }
            />
        );

        const h1Element = screen.getByRole( "heading", { name: /play list/i } );

        expect( h1Element ).toBeInTheDocument();
    } );

    it( "should display list of musics with four items", () => {
        const musicsList = [ ...musicsInfos ];
        const handlePlayMusic = jest.fn();

        render(
            <Main
                musicsInfos={ musicsList }
                handlePlayMusic={ handlePlayMusic }
            />
        );

        const musicCards = screen.getAllByLabelText( /music card/i );

        expect( musicCards ).toHaveLength( 4 );
    } );
} );

describe( "component Main - user behavior", () => {
    it( "should call handlePlayMusic when user click at first card", async () => {
        const musicsList = [ ...musicsInfos ];
        const handlePlayMusic = jest.fn();

        render(
            <Main
                musicsInfos={ musicsList }
                handlePlayMusic={ handlePlayMusic }
            />
        );

        const music01 = screen.getByLabelText( /card 01/i );

        await userEvent.click( music01 );

        expect( handlePlayMusic ).toBeCalled();
        expect( handlePlayMusic ).toBeCalledTimes( 1 );
    } );

    it( "should call handlePlayMusic when user click at second card", async () => {
        const musicsList = [ ...musicsInfos ];
        const handlePlayMusic = jest.fn();

        render(
            <Main
                musicsInfos={ musicsList }
                handlePlayMusic={ handlePlayMusic }
            />
        );

        const music02 = screen.getByLabelText( /card 02/i );

        await userEvent.click( music02 );

        expect( handlePlayMusic ).toBeCalled();
        expect( handlePlayMusic ).toBeCalledTimes( 1 );
    } );

    it( "should call handlePlayMusic when user click at third card", async () => {
        const musicsList = [ ...musicsInfos ];
        const handlePlayMusic = jest.fn();

        render(
            <Main
                musicsInfos={ musicsList }
                handlePlayMusic={ handlePlayMusic }
            />
        );

        const music03 = screen.getByLabelText( /card 03/i );

        await userEvent.click( music03 );

        expect( handlePlayMusic ).toBeCalled();
        expect( handlePlayMusic ).toBeCalledTimes( 1 );
    } );

    it( "should call handlePlayMusic when user click at fourth card", async () => {
        const musicsList = [ ...musicsInfos ];
        const handlePlayMusic = jest.fn();

        render(
            <Main
                musicsInfos={ musicsList }
                handlePlayMusic={ handlePlayMusic }
            />
        );

        const music04 = screen.getByLabelText( /card 04/i );

        await userEvent.click( music04 );

        expect( handlePlayMusic ).toBeCalled();
        expect( handlePlayMusic ).toBeCalledTimes( 1 );
    } );
} );
