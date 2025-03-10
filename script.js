  
function toggleAnswer(Number) {
    const answer = document.getElementById('answer' + Number);
    const plusButton = document.getElementById('plus' + Number);
    const minusButton = document.getElementById('minus' + Number);

   if (answer.style.display === 'flex') {
        answer.style.display = 'none';
        plusButton.style.visibility = 'visible';
        minusButton.style.visibility = 'hidden';
    } else {
        
        const allAnswers = document.querySelectorAll('p[id^="answer"]');
        const allPlusButtons = document.querySelectorAll('div[id^="plus"]');
        const allMinusButtons = document.querySelectorAll('div[id^="minus"]');
        
        allAnswers.forEach(item => item.style.display = 'none'); 
        allPlusButtons.forEach(item => item.style.visibility = 'visible');
        allMinusButtons.forEach(item => item.style.visibility = 'hidden');
        answer.style.display = 'flex';
        plusButton.style.visibility = 'hidden';
        minusButton.style.visibility = 'visible';
    }
}
