import React from "react";

import { render, screen, userEvent } from "../../tests";

import { MusicCard } from "./index";

import { musics } from "../../data/musics";

describe( "component Header", () => {
    it( "should display music infos about track 01", () => {
        const [ music01 ] = musics;
        const handlePlayMusic = jest.fn();

        render(
            <MusicCard
                handlePlayMusic={ handlePlayMusic }
                music={ music01 }
            />
        );

        const coverImg = screen.getByRole( "img", { name: /violão/i } );
        const titleMusic = screen.getByRole( "heading", { name: /Acústico/i } );
        const descriptionMusic = screen.getByText( /dummy/i );

        expect( coverImg ).toBeInTheDocument();
        expect( titleMusic ).toBeInTheDocument();
        expect( descriptionMusic ).toBeInTheDocument();
    } );

    it( "should select music when clicked the card", async () => {
        // @ts-ignore
        // eslint-disable-next-line no-unused-vars
        const [ _, music02, ] = musics;
        const handlePlayMusic = jest.fn();

        render(
            <MusicCard
                handlePlayMusic={ handlePlayMusic }
                music={ music02 }
            />
        );

        const musicCard = screen.getByLabelText( /music card/i );

        await userEvent.click( musicCard );

        expect( handlePlayMusic ).toBeCalled();
    } );
} );
