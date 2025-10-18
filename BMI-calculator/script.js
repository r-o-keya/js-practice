const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const bmiValue = document.querySelector("#bmi-value");
  const bmiCategory = document.querySelector("#bmi-category");

  if (!height || !weight || height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    bmiValue.textContent = "⚠️ Please enter valid values!";
    bmiCategory.textContent = "";
    bmiCategory.style.color = "";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  bmiValue.textContent = `Your BMI: ${bmi}`;
  
  let category = "";
  let color = "";

  if (bmi < 16.0) {
    category = "Underweight (Severe thinness)";
    color = "#66b3ff";
  } else if (bmi < 17.0) {
    category = "Underweight (Moderate thinness)";
    color = "#3385ff";
  } else if (bmi < 18.5) {
    category = "Underweight (Mild thinness)";
    color = "#33cccc";
  } else if (bmi < 25.0) {
    category = "Normal range";
    color = "#32cd32";
  } else if (bmi < 30.0) {
    category = "Overweight (Pre-obese)";
    color = "#ffa500";
  } else if (bmi < 35.0) {
    category = "Obese (Class I)";
    color = "#ff4d4d";
  } else if (bmi < 40.0) {
    category = "Obese (Class II)";
    color = "#cc0000";
  } else {
    category = "Obese (Class III)";
    color = "#660000";
  }

  bmiCategory.textContent = category;
  bmiCategory.style.color = color;
});
