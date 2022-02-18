const incomeInput = document.getElementById("income");
const foodInput = document.getElementById("food");
const rentInput = document.getElementById("rent");
const clothInput = document.getElementById("cloth");
const totalExpenses = document.getElementById("total-expenses");
const balanceAmount = document.getElementById("balance");
const saveInput = document.getElementById("save");
const savingAmount = document.getElementById("saving-amount");
const saveButton = document.getElementById("save-button");
const calculateButton = document.getElementById("calculate-button");

function calculate() {

    // expense calculation
    const totalEx = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);

    if (totalEx > parseFloat(incomeInput.value)) {
        console.log(totalEx, parseFloat(incomeInput.value));
        const errorMessage = document.getElementById('calculate-error-message');
        errorMessage.style.visibility = 'visible';
    } else {
        totalExpenses.innerText = totalEx.toLocaleString();


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
}

function save() {
    const remainingBalance = document.getElementById("rem-balance");
    const balanceAmount = document.getElementById("balance");
    //removing thousands seperator and converting into a number
    const tempBalance = parseFloat(balanceAmount.innerText.replace(/,/g, ""));
    const saved = tempBalance * (parseFloat(saveInput.value) / 100);
    const remaining = tempBalance - saved;


    if (saved > remaining) {
        const errorMessage = document.getElementById('save-error-message');
        errorMessage.style.visibility = 'visible';
    } else {
        savingAmount.innerText = saved.toLocaleString();
        remainingBalance.innerText = remaining.toLocaleString();
        saveInput.value = '';
    }

}

function validateInputFields(val, inputName) {
    const value = parseFloat(val.value);
    const errorMessage = document.getElementById(inputName + '-error-message');
    if (isNaN(value) || value < 0) {
        // console.log(inputName + " amount is invalid. Please enter a positive number!");
        errorMessage.style.visibility = 'visible';
    }
}
calculateButton.addEventListener('click', calculate);
saveButton.addEventListener('click', save);
incomeInput.addEventListener('focusout', function() {
    validateInputFields(this, 'income');
});
foodInput.addEventListener('focusout', function() {
    validateInputFields(this, 'food');
});
rentInput.addEventListener('focusout', function() {
    validateInputFields(this, 'rent');
});
clothInput.addEventListener('focusout', function() {
    validateInputFields(this, 'cloth');
});

incomeInput.addEventListener('focus', function() {

    document.getElementById(this.id + '-error-message').style.visibility = 'hidden';
    document.getElementById('calculate-error-message').style.visibility = 'hidden ';
});
foodInput.addEventListener('focus', function() {
    document.getElementById(this.id + '-error-message').style.visibility = 'hidden';
    document.getElementById('calculate-error-message').style.visibility = 'hidden ';
});
rentInput.addEventListener('focus', function() {
    document.getElementById(this.id + '-error-message').style.visibility = 'hidden';
    document.getElementById('calculate-error-message').style.visibility = 'hidden ';
});
clothInput.addEventListener('focus', function() {
    document.getElementById(this.id + '-error-message').style.visibility = 'hidden';
    document.getElementById('calculate-error-message').style.visibility = 'hidden ';
});
saveInput.addEventListener('focus', function() {
    document.getElementById(this.id + '-error-message').style.visibility = 'hidden';
});