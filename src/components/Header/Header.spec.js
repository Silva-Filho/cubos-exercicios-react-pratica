import React from "react";

import { render, screen } from "../../tests";

import { Header } from "./index";

describe.skip( "component Header", () => {
    it( "should display Logo image", () => {
        render( <Header /> );

        const logoImg = screen.getByRole( "img", { name: /logo/i } );

        expect( logoImg ).toBeInTheDocument();
    } );

    it( "should display Profile image", () => {
        render( <Header /> );

        const profileImg = screen.getByRole( "img", { name: /profile/i } );

        expect( profileImg ).toBeInTheDocument();
    } );

    it( "should display Welcome message", () => {
        render( <Header /> );

        const profileImg = screen.getByLabelText( /Welcome/i );

        expect( profileImg ).toBeInTheDocument();
    } );
} );
