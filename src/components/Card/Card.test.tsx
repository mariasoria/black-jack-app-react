import React from "react";
import {render, RenderResult} from '@testing-library/react';
import Card, {ARIA_LABEL} from "./Card";


describe ('Card', () => {
    it('render the component', function() {
        // GIVEN
       const renderResult = render (<Card stick={"♥"} rank={2}/>);
       // WHEN
        // THEN
       expect (renderResult.queryByLabelText(ARIA_LABEL)).toBeTruthy();
    });
    it('it should display a hearts card with the number 6', function() {
        // GIVEN
        const renderResult = render (<Card stick={"♥"} rank={6}/>);
        const nameText = '6';
        const regex = new RegExp(nameText);
        // WHEN
        // THEN
        expect (renderResult.getByText(/♥/i)).toBeTruthy();
        expect (renderResult.getByText(nameText)).toBeTruthy();
    });
});
