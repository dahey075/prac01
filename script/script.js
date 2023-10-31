
const flashcard = document.querySelector('.flashcard');
const showDefinitionButton = document.getElementById('showDefinition');
const nextCardButton = document.getElementById('nextCard');

import words from './words.js'; // words.js 파일로부터 words 배열을 가져옵니다.


let currentIndex = -1;

showDefinitionButton.addEventListener('click', () => {
    const definition = flashcard.querySelector('.definition');
    if (definition.style.display === 'none' || definition.style.display === '') {
        definition.style.display = 'block';
    } else {
        definition.style.display = 'none';
    }
});

nextCardButton.addEventListener('click', () => {
    flashcard.querySelector('.definition').style.display = 'none';
     // 무작위 단어를 표시하기 위해 현재 인덱스와 같지 않은 새로운 인덱스를 생성
     let newRandomIndex;
     do {
         newRandomIndex = Math.floor(Math.random() * words.length);
     } while (newRandomIndex === currentIndex);

     currentIndex = newRandomIndex;
     displayWord(words[currentIndex]);
});

function displayWord(word) {
    flashcard.querySelector('.word').textContent = word.word;
    flashcard.querySelector('.definition').textContent = word.definition;
}

// 초기 표시
nextCardButton.click(); // 첫 번째 무작위 단어 표시
