gsap.to('#bmi-calculator', { duration: 1.5, right: '20px', opacity: 1, ease: 'power2.out' });
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (weight > 0 && height > 0) {
      const bmi = (weight / (height * height)).toFixed(2);
      let resultText = '';

      // Determine BMI category and result text
      if (bmi < 18.5) {
          resultText = `Your BMI is ${bmi} (<span class="highlight">Underweight</span>)`;
      } else if (bmi >= 18.5 && bmi < 25) {
          resultText = `Your BMI is ${bmi} (<span class="highlight">Normal weight</span>)`;
      } else if (bmi >= 25 && bmi < 30) {
          resultText = `Your BMI is ${bmi} (<span class="highlight">Overweight</span>)`;
      } else {
          resultText = `Your BMI is ${bmi} (<span class="highlight">Obese</span>)`;
      }


      // Update the result display
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = resultText;
      resultDiv.style.display = 'block';

      // Calculate pointer rotation based on the BMI value (5-section meter)
      const pointer = document.getElementById('pointer');
      let rotation;

      if (bmi < 18.5) {
        // Underweight: Leftmost rotation (approx -72 degrees)
        rotation = -90;
      } else if (bmi >= 18.5 && bmi < 25) {
        // Normal weight: Slightly left-center (approx -36 degrees)
        rotation = -30;
      } else if (bmi >= 25 && bmi < 30) {
        // Overweight: Center (0 degrees)
        rotation = 35;
      } else {
        //Obese: Rightmost rotation (approx 72 degrees)
        rotation = 90;
      }

      // Apply the calculated rotation to the pointer
      pointer.style.transform = `rotate(${rotation}deg)`;
    } else {
      alert('Please enter valid values for weight and height');
    }
  }