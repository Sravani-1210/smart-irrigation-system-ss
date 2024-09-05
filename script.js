document.getElementById("irrigationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  const soilMoisture = parseFloat(document.getElementById("soilMoisture").value);
  const cropType = document.getElementById("cropType").value;
  const waterLevel = parseFloat(document.getElementById("waterLevel").value);
  const weatherCondition = document.getElementById("weatherCondition").value;

  // Logic to determine if irrigation is needed and how much water to use
  let irrigationNeeded = false;
  let waterAmount = 0;

  // Example logic (this can be more sophisticated based on real data)
  if (soilMoisture < 40) {
    irrigationNeeded = true;

    // Adjust water amount based on crop type and weather condition
    switch (cropType) {
      case "wheat":
        waterAmount = 50;
        break;
      case "corn":
        waterAmount = 70;
        break;
      case "rice":
        waterAmount = 90;
        break;
    }

    if (weatherCondition === "rainy") {
      waterAmount *= 0.5;  // Reduce water amount if it's rainy
    }
  }

  // Check if enough water is available
  if (waterLevel < waterAmount) {
    irrigationNeeded = false;
    waterAmount = 0;
  }

  // Display the result
  const resultDiv = document.getElementById("result");
  if (irrigationNeeded) {
    resultDiv.innerHTML = <p>Irrigation is needed. Use <strong>${waterAmount} liters</strong> of water.</p>;
  } else {
    resultDiv.innerHTML = "<p>No irrigation needed or not enough water available.</p>";
  }
});
