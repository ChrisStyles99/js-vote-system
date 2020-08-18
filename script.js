const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');
const results = document.querySelector('.results');
const ganar = document.querySelector('#ganador');
const reset = document.querySelector('#reset');

var voteNo = 0;
var voteYes = 0;

const showResults = () => {
  results.innerHTML = /*html*/`
    <p>Yes: ${voteYes}</p>
    <p>No: ${voteNo}</p>
  ` 
}

showResults();

yesBtn.addEventListener('click', () => {
  voteYes++;
  showResults();
  ganador();
});

noBtn.addEventListener('click', () => {
  voteNo++;
  showResults();
  ganador();
});

const deactivateBtn = () => {
  yesBtn.disabled = true;
  yesBtn.style.background = '#ccc';
  noBtn.disabled = true;
  noBtn.style.background = '#ccc';
}

const ganador = () => {
  if(voteYes === 10) {
    ganar.innerHTML = 'Yes wins';
    deactivateBtn();
  } else if(voteNo === 10) {
    ganar.innerHTML = 'No wins';
    deactivateBtn();
  }
}

reset.addEventListener('click', () => {
  if(voteYes === 10 || voteNo === 10) {
    voteNo = 0;
    voteYes = 0;
    showResults();
    yesBtn.disabled = false;
    noBtn.disabled = false;
    yesBtn.style.background = '#262626'
    noBtn.style.background = '#262626'
    ganar.innerHTML = '';
  }
});