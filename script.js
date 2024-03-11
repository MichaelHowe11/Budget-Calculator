

function updateMonthIncome(stTax1) {
    let yearSalary = document.getElementById('catDrop').value;
    console.log(yearSalary)





    let rent = parseFloat(document.getElementById('rent').value) || 0
    console.log(yearSalary)

    let homeInsurance = parseFloat(document.getElementById('homeInsurance').value) || 0
    console.log(homeInsurance)

    let repairsMaintenance = parseFloat(document.getElementById('repairsMaintenance').value) || 0
    console.log(repairsMaintenance)

    let utilities = parseFloat(document.getElementById('utilities').value) || 0
    console.log(utilities)

    let cableTVInternet = parseFloat(document.getElementById('cableTVInternet').value) || 0
    console.log(cableTVInternet)

    let phoneBill = parseFloat(document.getElementById('phoneBill').value) || 0
    console.log(phoneBill)

    let carPayment = parseFloat(document.getElementById('carPayment').value) || 0
    console.log(carPayment)

    let carInsurance = parseFloat(document.getElementById('carInsurance').value) || 0
    console.log(carInsurance)

    let gasFuel = parseFloat(document.getElementById('gasFuel').value) || 0
    console.log(gasFuel)

    let carRepairs = parseFloat(document.getElementById('carRepairs').value) || 0
    console.log(carRepairs)

    let collegeTuition = parseFloat(document.getElementById('collegeTuition').value) || 0
    console.log(collegeTuition)

    let studentLoans = parseFloat(document.getElementById('studentLoans').value) || 0
    console.log(studentLoans)

    let groceries = parseFloat(document.getElementById('groceries').value) || 0
    console.log(groceries)

    let clothing = parseFloat(document.getElementById('clothing').value) || 0
    console.log(clothing)

    let entertainment = parseFloat(document.getElementById('entertainment').value) || 0
    console.log(entertainment)

    let medical = parseFloat(document.getElementById('medical').value) || 0
    console.log(medical)

    let petExpenses = parseFloat(document.getElementById('petExpenses').value) || 0
    console.log(petExpenses)

    let otherExpenses = parseFloat(document.getElementById('otherExpenses').value) || 0
    console.log(otherExpenses)

    let savings = parseFloat(document.getElementById('savings').value) || 0
    console.log(savings)

    let investments = parseFloat(document.getElementById('investments').value) || 0
    console.log(investments)

    let retirement = parseFloat(document.getElementById('retirement').value) || 0
    console.log(retirement)






    let totalExpenses = rent + homeInsurance + repairsMaintenance + utilities + cableTVInternet + phoneBill + carPayment + carInsurance + gasFuel + carRepairs + collegeTuition + studentLoans + groceries + clothing + entertainment + medical + petExpenses + otherExpenses + savings + investments + retirement;

    yearSalary = yearSalary.replace(/\,/g, '')

    console.log((yearSalary))

    let monthIncome = (parseInt(yearSalary) / 12 - totalExpenses).toFixed(2);

    console.log(monthIncome)

    monthIncomeAft.innerHTML = "Monthly Income After Expenses: $" + monthIncome;



monthIncome = monthIncome * 

    total.innerHTML = "$";

}

document.addEventListener(`DOMContentLoaded`, function () {
    let yearSalary = 0;
    let monthIncome = 0;
    let stateTaxRate = 0;


    document.getElementById('userInput').addEventListener('change', function (eventData) {
        yearSalary = parseFloat(document.getElementById('userInput').value);
        updateMonthIncome();
    });

    document.getElementById('usStates').addEventListener('change', function (eventData) {
        stateTaxRate = parseFloat(document.getElementById('usStates').value);
        stTax.innerHTML = "State Taxes: " + (stateTaxRate * 100).toFixed(3) + "%"
        yearSalary = yearSalary * (1 - stateTaxRate);

        total.innerHTML = "Total Budget: " + (0)
        updateMonthIncome(stateTaxRate);
    });






    document.getElementById("submitButton").addEventListener("submit", function (eventData) {
        eventData.preventDefault();




        console.log(stateTaxRate)
    });


    function expenFunction() {
        updateMonthIncome()
    }




    document.getElementById('expen1').addEventListener('change', function (eventData) {
        updateMonthIncome()
        console.log(monthIncome)
    });
    document.getElementById('expen2').addEventListener('change', function (eventData) {
        updateMonthIncome()
        console.log(monthIncome)
    });

});