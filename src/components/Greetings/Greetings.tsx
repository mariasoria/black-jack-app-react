import React, {FC} from 'react';
import styled from '@emotion/styled';
import {Title} from './styles';

interface GreetingsProps{
    name: string;
    lastname?: string;
}

const Greetings:FC<GreetingsProps> = ({name, lastname}) => {
    return (
        <div>
            <Title> Hello {name} {lastname}</Title>
        </div>
    );
};

export default Greetings;
