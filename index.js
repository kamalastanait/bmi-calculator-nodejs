form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if(weight <= 0 || height <= 0){
        resultDiv.textContent = "Please enter valid numbers!";
        resultDiv.className = 'result show error';
        return;
    }

    const bmi = weight / (height * height);
    let message = `Your BMI: ${bmi.toFixed(1)}`;

    // Убираем старые классы
    resultDiv.className = 'result show';

    // Цвета в зависимости от BMI
    if(bmi < 18.5 || bmi > 30){
        resultDiv.classList.add('red');
        message += " (Unhealthy)";
    } else if((bmi >= 18.5 && bmi < 20) || (bmi > 25 && bmi <= 30)){
        resultDiv.classList.add('yellow');
        message += " (Borderline)";
    } else {
        resultDiv.classList.add('green');
        message += " (Normal)";
    }

    resultDiv.textContent = message;
});

