const incomeInput = document.getElementById("income");
const foodInput = document.getElementById("food");
const rentInput = document.getElementById("rent");
const clothInput = document.getElementById("cloth");
const totalExpenses = document.getElementById("total-expenses");
const balanceAmount = document.getElementById("balance");
const saveInput = document.getElementById("save");
const saveButton = document.getElementById("save-button");
const calculateButton = document.getElementById("calculate-button");


function calculate() {
    // expense calculation
    const totalEx = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);
    totalExpenses.innerText = totalEx.toLocaleString();
    // expense calculation


    //balance calculation
    const totalBAmount = parseFloat(incomeInput.value) - totalEx;
    balanceAmount.innerText = totalBAmount.toLocaleString();
    //balance calculation
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    incomeInput.value = '';
    return totalBAmount;
}
calculateButton.addEventListener('click', calculate);
// saveButton.addEventListener('click', save(balance));