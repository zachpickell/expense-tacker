document.addEventListener('DOMContentLoaded', function() {
    const savedExpenses = JSON.parse(window.localStorage.getItem('expenses')) || [];
    const incomeInput = document.getElementById('income');
    const savedIncome = window.localStorage.getItem('income');
    const expensesList = document.getElementById('expenses');
    
    if (savedIncome) {
        incomeInput.value = savedIncome;
    }

    savedExpenses.forEach(expense => {
        expensesList.innerHTML += `<li>${expense.label} - $${expense.amount}</li>`;
    });

    document.getElementById('add').addEventListener('click', function() {
        const expenseLabel = document.getElementById('expense').value;
        const expenseAmount = parseFloat(document.getElementById('amount').value);
        if (expenseLabel && !isNaN(expenseAmount)) {
            expensesList.innerHTML += `<li>${expenseLabel} - $${expenseAmount}</li>`;
            savedExpenses.push({ label: expenseLabel, amount: expenseAmount });
            window.localStorage.setItem('expenses', JSON.stringify(savedExpenses));

            document.getElementById('expense').value = '';
            document.getElementById('amount').value = '';
        }
    });

    document.getElementById('submit').addEventListener('click', function() {
        const totalIncome = parseFloat(incomeInput.value) || 0;
        let totalExpenses = savedExpenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        let totalBalance = totalIncome - totalExpenses;

        document.getElementById('totalIncome').innerHTML = `Total Income: $${totalIncome}`;
        document.getElementById('totalExpenses').innerHTML = `Total Expenses: $${totalExpenses}`;
        document.getElementById('totalBalance').innerHTML = `Total Balance: $${totalBalance}`;
        document.getElementById('totalBalance').style.color = totalBalance < 0 ? 'red' : 'black';
        document.getElementById('finalStatement').style.display = 'flex';
    });

    incomeInput.addEventListener('input', function() {
        window.localStorage.setItem('income', incomeInput.value);
    });

    document.getElementById('reset').addEventListener('click', function() {
        window.localStorage.clear();
        expensesList.innerHTML = '';
        incomeInput.value = '';
        document.getElementById('finalStatement').style.display = 'none';
    });
});
