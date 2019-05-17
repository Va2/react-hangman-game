import React from 'react';

// Bootstrap component
import { Button } from 'reactstrap';

const keyboardLetters1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
const keyboardLetters2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const keyboardRow1 = [];
const keyboardRow2 = [];

for (const [index, letter] of keyboardLetters1.entries()) {
	keyboardRow1.push(<Button key={index} color="info mx-1">{letter}</Button>)
}
for (const [index, letter] of keyboardLetters2.entries()) {
	keyboardRow2.push(<Button key={index} color="info mx-1 mt-2">{letter}</Button>)
}

function Keyboard() {
    return (
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-5">
                {keyboardRow1}
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                {keyboardRow2}
            </div>
        </div>
    )
}

export default Keyboard;