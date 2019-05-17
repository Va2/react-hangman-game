import React from 'react';

// Bootstrap component
import { Badge } from 'reactstrap';

// Assets (css, img, font)
import hangman from '../img/step11.jpg';

function AttemptsCounter() {
    return (
        <div className="col-md-6 text-center">
            <h2 className="d-flex justify-content-center my-5">
                Attempt number: <Badge color="info">.../11</Badge>
            </h2>

            <img className="img-fluid" src={hangman} alt="Hangman" />
        </div>
    )
}

export default AttemptsCounter;