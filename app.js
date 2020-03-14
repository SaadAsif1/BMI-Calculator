// Get UI values

const weightIn = document.querySelector('#weight');
const heightIn = document.querySelector('#height');
const inchesIn = document.querySelector('#inches');
const button = document.querySelector('#submit');
const output = document.querySelector('#output');
const state = document.querySelector('#state');

button.addEventListener('click', btnClicked);

// button clicked
function btnClicked(e) {
  const weightVal = parseFloat(weightIn.value);
  const heightVal = parseFloat(heightIn.value);
  const inchesVal = parseFloat(inchesIn.value);

  if (
    weightIn.value === '0' ||
    heightIn.value === '0' ||
    heightIn.value === '' ||
    weightIn.value === '' ||
    inchesIn.value === ''
  ) {
    alert('Must Fill all input values');
  } else {
    if (inchesVal >= 12) {
      alert('Inches must be less than 12');
    } else {
      if (weightVal.toString().length > 4) {
        alert('Must Enter Resonable Weight');
      } else {
        const weightKilo = weightVal / 2.205;
        const heightMeters = (heightVal * 12 + inchesVal) / 12 / 3.281;
        const heightSq = Math.pow(heightMeters, 2);
        const answer = parseFloat(weightKilo / heightSq);

        output.value = answer.toFixed(1);

        if (answer < 18.5) {
          state.textContent = `UnderWeight BMI`;
        } else if (answer >= 18.5 && answer <= 24.9) {
          state.textContent = `Normal BMI`;
        } else if (answer >= 25.0 && answer <= 29.9) {
          state.textContent = `Overweight BMI`;
        } else {
          state.textContent = `Very Overweight BMI`;
        }

        weightIn.value = '';
        heightIn.value = '';
        inchesIn.value = '0';
        console.log(answer);
      }
    }
  }

  e.preventDefault();
}

const bunRefer = document
  .querySelector('input[type="submit"]')
  .addEventListener('click', function(e) {
    const location = document.querySelector('#loading');
    location.style.display = 'block';
    setTimeout(function() {
      location.innerHTML = ' <img src="./images/bmi.jpeg" alt="">';
    }, 2000);

    e.preventDefault();
  });
