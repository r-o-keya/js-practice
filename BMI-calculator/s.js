document.getElementById("calculate").addEventListener("click", function() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValue.textContent = "⚠️ Please enter valid values!";
    bmiCategory.textContent = "";
    bmiCategory.style.color = "";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  bmiValue.textContent = `Your BMI: ${bmi}`;

  let category = "";
  let color = "";
  let emoji = "";

  if (bmi < 16.0) {
    category = "Underweight (Severe thinness)";
    color = "#66b3ff";
    emoji = "😵‍💫";
  } else if (bmi < 17.0) {
    category = "Underweight (Moderate thinness)";
    color = "#3385ff";
    emoji = "😟";
  } else if (bmi < 18.5) {
    category = "Underweight (Mild thinness)";
    color = "#33cccc";
    emoji = "😕";
  } else if (bmi < 25.0) {
    category = "Normal range";
    color = "#32cd32";
    emoji = "😄";
  } else if (bmi < 30.0) {
    category = "Overweight (Pre-obese)";
    color = "#ffa500";
    emoji = "😐";
  } else if (bmi < 35.0) {
    category = "Obese (Class I)";
    color = "#ff4d4d";
    emoji = "😦";
  } else if (bmi < 40.0) {
    category = "Obese (Class II)";
    color = "#cc0000";
    emoji = "😣";
  } else {
    category = "Obese (Class III)";
    color = "#000000";
    emoji = "😵";
  }

  bmiCategory.textContent = `${emoji} Category: ${category}`;
  bmiCategory.style.color = color;
});
