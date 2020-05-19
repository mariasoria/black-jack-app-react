import React from 'react';
import {render} from '@testing-library/react';
import Greetings from "./Greetings";


describe ('Greetings', () => {
   it('should render the component', function () {
       // GIVEN
       const renderResult = render(<Greetings name={'Maria'}/>);
       // WHEN
       // THEN
       expect(renderResult.queryByLabelText('greetings')).toBeTruthy();
   });
    it('should have text of name', function () {
        // GIVEN
        const nameText = 'Maria';
        const regex = new RegExp(nameText);
        const renderResult = render(<Greetings name={'Maria'}/>);
        // WHEN
        // THEN
        expect(renderResult.queryByText(regex)).toBeInTheDocument();
    });
});


/*
describe ('NombreComponente', () => {
   it('should render the component', function () {
       // GIVEN
       // WHEN
       // THEN
   });
});
*/
