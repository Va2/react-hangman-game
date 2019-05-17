import React from 'react';

// Bootstrap component
import { Badge } from 'reactstrap';

// CSS/BS4 classes
// const badgeClasses = "info mx-1";

const guessWordsArr = [
    "REACT",
    "JAVASCRIPT",
    "PROGRAMMING",
    "PHP",
    "LARAVEL",
    "WORDPRESS",
    "BOOTSTRAP",
    "CSS",
    "HTML",
    "MYSQL",
    "Sass",
    "Database",
    "Code",
    "Function",
    "Loop",
    "Condition",
    "Component"
];

const generateRandomWordArr = () => {
	const randomWord = guessWordsArr[Math.floor(Math.random() * guessWordsArr.length)].toUpperCase();
	console.log(randomWord);

	const wordArr = randomWord.split('');
	console.log(wordArr);
	
	const guessWordLength = wordArr.length;
	console.log(guessWordLength);

	return wordArr;
}

function GuessWord() {
    return (
        <h1 className="d-flex justify-content-center my-5">
            {
                // generateRandomWordArr().map((elt, key) => (
				// 	false ?
						
				// 		<Badge color={badgeClasses} key={key} >_</Badge>
				// 	:
				// 		<Badge color={badgeClasses} key={key} >{elt}</Badge>
				// ))
				
				generateRandomWordArr().map((elt, key) => (
					<Badge color="info mx-1" key={key} >_</Badge>
            	))
            }
        </h1>
    )
}

export default GuessWord;