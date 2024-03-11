document.addEventListener(`DOMContentLoaded`, function () {
    let yearSalary = 0;
    let monthIncome = 0;

    function updateMonthIncome() {
        let hoaFees = parseFloat(document.getElementById('hoaFees').value);
        let rent = parseFloat(document.getElementById('rent').value);
        let homeInsurance = parseFloat(document.getElementById('homeInsurance').value);
        let repairsMaintenance = parseFloat(document.getElementById('repairsMaintenance').value);
        let utilities = parseFloat(document.getElementById('utilities').value);
        let cableTVInternet = parseFloat(document.getElementById('cableTVInternet').value);
        let phoneBill = parseFloat(document.getElementById('phoneBill').value);
        let carPayment = parseFloat(document.getElementById('carPayment').value);
        let carInsurance = parseFloat(document.getElementById('carInsurance').value);
        let gasFuel = parseFloat(document.getElementById('gasFuel').value);
        let carRepairs = parseFloat(document.getElementById('carRepairs').value);
        let collegeTuition = parseFloat(document.getElementById('collegeTuition').value);
        let studentLoans = parseFloat(document.getElementById('studentLoans').value);
        let groceries = parseFloat(document.getElementById('groceries').value);
        let clothing = parseFloat(document.getElementById('clothing').value);
        let entertainment = parseFloat(document.getElementById('entertainment').value);
        let medical = parseFloat(document.getElementById('medical').value);
        let petExpenses = parseFloat(document.getElementById('petExpenses').value);
        let otherExpenses = parseFloat(document.getElementById('otherExpenses').value);
        let savings = parseFloat(document.getElementById('savings').value);
        let investments = parseFloat(document.getElementById('investments').value);
        let retirement = parseFloat(document.getElementById('retirement').value);

        let totalExpenses = hoaFees + rent + homeInsurance + repairsMaintenance +
            utilities + cableTVInternet + phoneBill + carPayment + carInsurance +
            gasFuel + carRepairs + collegeTuition + studentLoans + groceries +
            clothing + entertainment + medical + petExpenses + otherExpenses +
            savings + investments + retirement;

        monthIncome = (yearSalary / 12 - totalExpenses).toFixed(2);

    }

    document.getElementById('catDrop1').addEventListener('change', function (eventData) {
        yearSalary = parseFloat(document.getElementById('catDrop').value);
        updateMonthIncome();
    });

    document.getElementById('userInput').addEventListener('change', function (eventData) {
        yearSalary = parseFloat(document.getElementById('userInput').value);
        updateMonthIncome();
    });

    document.getElementById('usStates').addEventListener('change', function (eventData) {
        let stateTaxRate = parseFloat(document.getElementById('usStates').value);
        yearSalary = yearSalary * (1 - stateTaxRate);
        updateMonthIncome();
    });

    document.querySelectorAll('[id^=]').forEach(function (input) {
        input.addEventListener('change', function (eventData) {
            updateMonthIncome();
        });
    });
});
