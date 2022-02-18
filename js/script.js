const saveButton = document.getElementById("save-button");
const calculateButton = document.getElementById("calculate-button");


function calculate() {
    const incomeInput = document.getElementById("income");
    const foodInput = document.getElementById("food");
    const rentInput = document.getElementById("rent");
    const clothInput = document.getElementById("cloth");
    const totalExpenses = document.getElementById("total-expenses");
    const balanceAmount = document.getElementById("balance");
    // expense calculation
    const totalEx = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);
    totalExpenses.innerText = totalEx.toLocaleString();
    // expense calculation

    //balance calculation
    const totalBAmount = parseFloat(incomeInput.value) - totalEx;
    balanceAmount.innerText = totalBAmount.toLocaleString();
    // balanceAmount.innerText = totalBAmount;
    //balance calculation
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    incomeInput.value = '';
    return totalBAmount;
}

function save() {
    const saveInput = document.getElementById("save");
    const savingAmount = document.getElementById("saving-amount");
    const remainingBalance = document.getElementById("rem-balance");
    const balanceAmount = document.getElementById("balance");
    //removing thousands seperator and converting into a number
    const tempBalance = parseFloat(balanceAmount.innerText.replace(/,/g, ""));
    const saved = tempBalance * (parseFloat(saveInput.value) / 100);
    savingAmount.innerText = saved.toLocaleString();
    const remaining = tempBalance - saved;
    remainingBalance.innerText = remaining.toLocaleString();
    saveInput.value = '';
    // console.log(tempBalance);
}
calculateButton.addEventListener('click', calculate);
saveButton.addEventListener('click', save);