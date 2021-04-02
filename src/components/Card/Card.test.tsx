import React from "react";
import {render, RenderResult} from '@testing-library/react';
import Card, {ARIA_LABEL} from "./Card";


describe ('Card', () => {
    it('should display the component', function() {
        // GIVEN
       const renderResult:RenderResult = render (<Card suit={"♥"} rank={6}/>);
       // WHEN
        // THEN
       expect (renderResult.queryByLabelText(ARIA_LABEL)).toBeTruthy();
    });
    it('it should display a hearts card with the number 6', function() {
        // GIVEN
        const renderResult:RenderResult = render (<Card suit={"♥"} rank={6}/>);
        // WHEN
        // THEN
        expect (renderResult.getByText(/♥/i)).toBeInTheDocument();
        expect (renderResult.getByText(/6/i)).toBeInTheDocument();
    });
});
