document.addEventListener(`DOMContentLoaded`, function () {
    let yearSalary = 0;
    let monthIncome = 0;



    document.getElementById('userInput').addEventListener('change', function (eventData) {
        yearSalary = parseFloat(document.getElementById('userInput').value);
        updateMonthIncome();
    });

    document.getElementById('usStates').addEventListener('change', function (eventData) {
        let stateTaxRate = parseFloat(document.getElementById('usStates').value);
        yearSalary = yearSalary * (1 - stateTaxRate);
        updateMonthIncome();
    });
});

function updateMonthIncome() {
    let yearSalary = document.getElementById('catDrop').value;
    console.log(yearSalary)
    let rent = parseFloat(document.getElementById('rent').value)
    console.log(yearSalary)

    let homeInsurance = parseFloat(document.getElementById('homeInsurance').value)
    console.log(homeInsurance)

    let repairsMaintenance = parseFloat(document.getElementById('repairsMaintenance').value)
    console.log(repairsMaintenance)

    let utilities = parseFloat(document.getElementById('utilities').value)
    console.log(utilities)

    let cableTVInternet = parseFloat(document.getElementById('cableTVInternet').value)
    console.log(cableTVInternet)

    let phoneBill = parseFloat(document.getElementById('phoneBill').value)
        console.log(phoneBill)

    let carPayment = parseFloat(document.getElementById('carPayment').value)
        console.log(carPayment)

    let carInsurance = parseFloat(document.getElementById('carInsurance').value)
        console.log(carInsurance)

    let gasFuel = parseFloat(document.getElementById('gasFuel').value)
        console.log(gasFuel)

    let carRepairs = parseFloat(document.getElementById('carRepairs').value)
        console.log(carRepairs)

    let collegeTuition = parseFloat(document.getElementById('collegeTuition').value)
        console.log(collegeTuition)

    let studentLoans = parseFloat(document.getElementById('studentLoans').value)
        console.log(studentLoans)

    let groceries = parseFloat(document.getElementById('groceries').value)
        console.log(groceries)

    let clothing = parseFloat(document.getElementById('clothing').value)
        console.log(clothing)

    let entertainment = parseFloat(document.getElementById('entertainment').value)
        console.log(entertainment)

    let medical = parseFloat(document.getElementById('medical').value)
        console.log(medical)

    let petExpenses = parseFloat(document.getElementById('petExpenses').value)
        console.log(petExpenses)

    let otherExpenses = parseFloat(document.getElementById('otherExpenses').value)
        console.log(otherExpenses)

    let savings = parseFloat(document.getElementById('savings').value)
        console.log(savings)

    let investments = parseFloat(document.getElementById('investments').value)
        console.log(investments)

    let retirement = parseFloat(document.getElementById('retirement').value)
        console.log(retirement)

    let totalExpenses = rent + homeInsurance + repairsMaintenance + utilities + cableTVInternet + phoneBill + carPayment + carInsurance + gasFuel + carRepairs + collegeTuition + studentLoans + groceries + clothing + entertainment + medical + petExpenses + otherExpenses + savings + investments + retirement;

    monthIncome = (yearSalary / 12 - totalExpenses).toFixed(2);

    console.log(monthIncome)

}

