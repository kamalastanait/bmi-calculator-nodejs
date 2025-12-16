const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/calculate-bmi', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        return res.send('Invalid input. Please enter positive numbers.');
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';

    res.send(`
        <h1>Your BMI: ${bmi.toFixed(2)}</h1>
        <h2>Category: ${category}</h2>
        <a href="/">Back</a>
    `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
