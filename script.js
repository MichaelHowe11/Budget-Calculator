
document.addEventListener(`DOMContentLoaded`, function () {
    let yearSalary = 0;
    let monthIncome = 0;


    let catDropElement = document.getElementById('catDrop');
    if (catDropElement) {
        catDropElement.addEventListener('change', function (eventData) {
            yearSalary = catDropElement.value;
        });
    }


    document.getElementById('userInput').addEventListener('change', function (eventData) {

        yearSalary = parseFloat(document.getElementById('userInput').value);
        monthIncome = (yearSalary / 12).toFixed(2);
    });

    document.getElementById('usStates').addEventListener('change', function (eventData) {
        console.log(yearSalary)
        let stateTaxRate = parseFloat(document.getElementById('usStates').value);
        yearSalary = yearSalary * (1 - stateTaxRate);
        monthIncome = (yearSalary / 12).toFixed(2);
        console.log(monthIncome)
    });
});
