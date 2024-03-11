
document.addEventListener(`DOMContentLoaded`, function () {
    let yearSalary = 0;
    let monthIncome = 0;

    document.getElementById('userInput').addEventListener('change', function (eventData) {
        yearSalary = parseFloat(document.getElementById('userInput').value);
        monthIncome = (yearSalary / 12).toFixed(2);
    });

    document.getElementById('usStates').addEventListener('change', function (eventData) {
        let stateTaxRate = parseFloat(document.getElementById('usStates').value);
        yearSalary = yearSalary * (1 - stateTaxRate);
        monthIncome = (yearSalary / 12).toFixed(2);
        console.log(monthIncome)
    });
});
