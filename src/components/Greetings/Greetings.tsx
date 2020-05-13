import React, {FC} from 'react';

interface GreetingsProps{
    name: string;
    lastname: string;
}

const Greetings:FC<GreetingsProps> = ({name, lastname}) => {
    return (
        <div>
            <h1> Hello {name} {lastname}</h1>
        </div>
    );
};

export default Greetings;
