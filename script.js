let totalExpenses = 0;

function updateMonthIncome() {
    let tempSalary = document.getElementById('catDrop').value.replace(/\,/g, '');
    let yearSalary = parseFloat(tempSalary);

    let mortgage = parseFloat(document.getElementById('mortgage').value) || 0;
    let rent = parseFloat(document.getElementById('rent').value) || 0;
    let homeInsurance = parseFloat(document.getElementById('homeInsurance').value) || 0;
    let repairsMaintenance = parseFloat(document.getElementById('repairsMaintenance').value) || 0;
    let utilities = parseFloat(document.getElementById('utilities').value) || 0;
    let cableTVInternet = parseFloat(document.getElementById('cableTVInternet').value) || 0;
    let phoneBill = parseFloat(document.getElementById('phoneBill').value) || 0;
    let carPayment = parseFloat(document.getElementById('carPayment').value) || 0;
    let carInsurance = parseFloat(document.getElementById('carInsurance').value) || 0;
    let gasFuel = parseFloat(document.getElementById('gasFuel').value) || 0;
    let carRepairs = parseFloat(document.getElementById('carRepairs').value) || 0;
    let collegeTuition = parseFloat(document.getElementById('collegeTuition').value) || 0;
    let studentLoans = parseFloat(document.getElementById('studentLoans').value) || 0;
    let groceries = parseFloat(document.getElementById('groceries').value) || 0;
    let clothing = parseFloat(document.getElementById('clothing').value) || 0;
    let entertainment = parseFloat(document.getElementById('entertainment').value) || 0;
    let medical = parseFloat(document.getElementById('medical').value) || 0;
    let petExpenses = parseFloat(document.getElementById('petExpenses').value) || 0;
    let otherExpenses = parseFloat(document.getElementById('otherExpenses').value) || 0;
    let savings = parseFloat(document.getElementById('savings').value) || 0;
    let investments = parseFloat(document.getElementById('investments').value) || 0;
    let retirement = parseFloat(document.getElementById('retirement').value) || 0;
    totalExpenses = rent + homeInsurance + repairsMaintenance + utilities + cableTVInternet + phoneBill + carPayment + carInsurance + gasFuel + carRepairs + collegeTuition + studentLoans + groceries + clothing + entertainment + medical + petExpenses + otherExpenses + savings + investments + retirement + mortgage;

    let monthIncome = 0;
    let stTax2 = document.getElementById('usStates').value;
    let customInput = document.getElementById("userInput").value;

    if (customInput != "") {
        customInput = parseFloat(customInput);
        stTax2 = (customInput / 12) * stTax2
        monthIncome = ((customInput / 12) - stTax2) - totalExpenses
        monthIncome = monthIncome || 0;
    } else {
        monthIncome = (parseFloat(yearSalary) / 12) * (1 - parseFloat(document.getElementById('usStates').value)) - totalExpenses;
    }
    monthIncome = monthIncome || 0;

    console.log(monthIncome)
    monthIncomeAft.innerHTML = "Monthly Income After Expenses: $"+monthIncome
    if (monthIncome <= 0) {
        monthIncomeAft.innerHTML = customInput / 12
    }
    let fedTax = 0.07 * monthIncome;
    let socSec = 0.062 * monthIncome;
    let med = 0.0145 * monthIncome;
    let stDis = 0.01 * monthIncome;
    let retInv = 0.05 * monthIncome;

    monthIncome = monthIncome - (fedTax + socSec + med + stDis + retInv + 180);

    monthIncome = monthIncome || parseFloat(tempSalary);
    yearSalary = yearSalary || parseFloat(tempSalary);
    console.log(parseFloat(tempSalary))

    monthIncome = parseFloat(monthIncome);
    yearSalary = parseFloat(yearSalary);

    console.log(monthIncome);
    console.log(yearSalary);

    let monthlyIncomeAfterExpenses = (yearSalary / 12) - totalExpenses||0;
console.log(monthlyIncomeAfterExpenses)

    if (parseFloat(monthIncomeAft.innerHTML) <= 0) {
        monthIncomeAft.innerHTML = "Monthly Income After Expenses: $" + parseFloat(monthlyIncomeAfterExpenses).toFixed(2);

    }

    if (monthIncome <= 0) {
        total.innerHTML = "Total Budget: $" + customInput / 12;
    } else {
        total.innerHTML = "Total Budget: $" + parseFloat(monthIncome).toFixed(2);
    }
}

document.addEventListener(`DOMContentLoaded`, function () {
    let yearSalary = 0;
    let monthIncome = 0;
    let stateTaxRate = 0;

    document.getElementById('userInput').addEventListener('change', function (eventData) {
        updateMonthIncome();
        yearSalary = (parseFloat(document.getElementById('userInput').value));
    });

    document.getElementById('usStates').addEventListener('change', function (eventData) {
        stateTaxRate = parseFloat(document.getElementById('usStates').value);
        stTax.innerHTML = "State Taxes: " + ((stateTaxRate * 100).toFixed(3)) || document.getElementById('catDrop').value + "%";
        yearSalary = yearSalary * (1 - stateTaxRate);
        total.innerHTML = "Total Budget: $" + (yearSalary || document.getElementById('catDrop').value);
        updateMonthIncome(stateTaxRate);
    });

    document.getElementById("submitButton").addEventListener("submit", function (eventData) {
        updateMonthIncome();
        stateTaxRate = parseFloat(document.getElementById('usStates').value);
        monthIncome = parseFloat(monthIncomeAft.innerHTML.replace(/[^\d.-]/g, ''));
        console.log(monthIncome)
        eventData.preventDefault();
    });
    function expenFunction() {
        updateMonthIncome();
    }
    document.getElementById('expen1').addEventListener('change', function (eventData) {
        updateMonthIncome();
    });
    document.getElementById('expen2').addEventListener('change', function (eventData) {
        updateMonthIncome();
    });
});