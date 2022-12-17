import React, { useState } from "react";

import { render, renderHook, screen, userEvent, waitFor } from "../../tests";

import { Home } from "./index";

describe( "component Home - user behavior", () => {
    it( "should display music title and artist when user click at any card", async () => {
        render( <Home /> );

        const musicCard02 = screen.getByTestId( /02/i );

        await userEvent.click( musicCard02 );

        const titleMusic = screen.getByTestId( /playing-title/ );
        const artistMusic = screen.getByTestId( /playing-artist/ );

        expect( titleMusic ).toBeTruthy();
        expect( artistMusic ).toBeTruthy();
        expect( titleMusic ).toHaveTextContent( /Just Things/ );
        expect( artistMusic ).toHaveTextContent( /John Cris/ );
    } );
} );
// expect( titleMusic ).toBe( expect.stringMatching( /Just Things/i ) );
