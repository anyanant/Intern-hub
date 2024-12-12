

const expensesForm = document.getElementById('expenses-form');
const expensesList = document.getElementById('expenses-list');
const totalExpenses = document.getElementById('total-expenses');
const expenses = [];

expensesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const expense = { date, category, amount };
    expenses.push(expense);
    displayExpenses();
    displayTotalExpenses();
});

function displayExpenses() {
    const expensesHTML = expenses.map((expense, index) => `
        <div>
            <p>Date: ${expense.date}</p>
            <p>Category: ${expense.category}</p>
            <p>Amount: ${expense.amount}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        </div>
    `).join('');
    expensesList.innerHTML = expensesHTML;
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            expenses.splice(index, 1);
            displayExpenses();
            displayTotalExpenses();
        });
    });
}

function displayTotalExpenses() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
}

