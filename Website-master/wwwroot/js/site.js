$(document).ready(function () {
    initializeCategories();
    displayExpenses();

    // Toggle add expense form
    $('#toggleAddExpenseButton').click(function () {
        $('#addExpenseFormContainer').toggle();
        $(this).text($('#addExpenseFormContainer').is(':visible') ? 'Cancel' : 'Add New Expense');
    });

    // Toggle delete expense form
    $('#toggleDeleteExpenseButton').click(function () {
        $('#deleteExpenseFormContainer').toggle();
        $(this).text($('#deleteExpenseFormContainer').is(':visible') ? 'Cancel' : 'Delete Expense');
    });

    // Save or update an expense
    $('#saveExpense').click(function () {
        const id = $('#expenseId').val();
        const category = $('#category').val();
        const item = $('#item').val();
        const amount = parseFloat($('#amount').val());

        if (id) {
            editExpense(parseInt(id), category, item, amount);
        } else {
            addExpense(category, item, amount);
        }

        $('#expenseModal').modal('hide');
    });

    // Handle the edit button click to populate the form and show the modal
    $(document).on('click', '.editExpense', function () {
        const id = $(this).data('id');
        const expense = expenses.find(e => e.id === parseInt(id));
        if (expense) {
            $('#category').val(expense.category);
            $('#item').val(expense.item);
            $('#amount').val(expense.amount);
            $('#expenseId').val(expense.id);
            $('#expenseModal').modal('show');
        }
    });

    // Delete an expense with confirmation
    $(document).on('click', '.deleteExpense', function () {
        const id = $(this).data('id');
        if (confirm('Are you sure you want to delete this expense?')) {
            deleteExpense(parseInt(id));
        }
    });
});

function initializeCategories() {
    var categories = JSON.parse(localStorage.getItem('categories')) || ["Groceries", "Rent", "Entertainment", "Transport", "Miscellaneous"];
    var categorySelect = $('#category');
    var categoryList = $('#categoryList');

    categorySelect.empty();
    categoryList.empty();

    categories.forEach(function (category) {
        categorySelect.append(`<option value="${category}">${category}</option>`);
        categoryList.append(`<a href="expense_details.html?category=${category}" class="list-group-item list-group-item-action">${category}</a>`);
    });
}

function displayExpenses() {
    const expenseList = $('#incomeList');
    expenseList.empty();
    expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => {
        expenseList.append(`<li class="list-group-item">
            ${expense.category} - ${expense.item} - $${expense.amount}
            <button type="button" class="btn btn-info btn-sm editExpense" data-id="${expense.id}">Edit</button>
            <button type="button" class="btn btn-danger btn-sm deleteExpense" data-id="${expense.id}">Delete</button>
        </li>`);
    });
}

function addExpense(category, item, amount) {
    const newId = expenses.length + 1;
    expenses.push({ id: newId, category, item, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function editExpense(id, category, item, amount) {
    const index = expenses.findIndex(exp => exp.id === id);
    if (index !== -1) {
        expenses[index] = { id, category, item, amount };
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
function deleteTransaction(element) {
    // Get the parent element of the button, which is the container of the transaction.
    var transactionContainer = element.parentElement;

    // You might need to adjust this depending on your HTML structure.
    // If your button is deep inside the structure, you might need to use parentNode multiple times.
    // Example: var transactionRow = element.parentElement.parentElement;

    // Remove the transaction container from the DOM
    transactionContainer.remove();
}



function displayExpenses() {
    const expenseList = $('#incomeList');
    expenseList.empty();
    expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => {
        expenseList.append(`<li class="list-group-item">
            ${expense.category} - ${expense.item} - $${expense.amount}
            <button type="button" class="btn btn-info btn-sm editExpense" data-id="${expense.id}">Edit</button>
            <button type="button" class="btn btn-danger btn-sm deleteExpense" data-id="${expense.id}">Delete</button>
        </li>`);
    });
}

function addExpense(category, item, amount) {
    const newId = expenses.length + 1;
    expenses.push({ id: newId, category, item, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function editExpense(id, category, item, amount) {
    const index = expenses.findIndex(exp => exp.id === id);
    if (index !== -1) {
        expenses[index] = { id, category, item, amount };
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }
}

$(document).ready(function () {
    $('#subscriptionForm').submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        var detail = $('#Details').val();
        var amount = $('#amount').val();

        // Create a table row with the data
        var newRow = `
            <tr>
                <td>${detail}</td>
                <td>$${amount}</td>
                <td><button type="button" class="btn btn-danger deleteIncome">Delete</button></td>
            </tr>
        `;

        // Append the new row to the table
        $('#incomeTable tbody').append(newRow);

        // Reset the form inputs
        $('#Details').val('');
        $('#amount').val('');
    });

    // Handle delete action
    $(document).on('click', '.deleteIncome', function () {
        $(this).closest('tr').remove(); // Remove the closest table row
    });
});

$(document).ready(function () {
    // ... other code ...

    // Handle delete action with confirmation for income
    $(document).on('click', '.deleteIncome', function () {
        // Confirm before delete
        if (confirm('Are you sure you want to delete this income source?')) {
            $(this).closest('tr').remove(); // Remove the closest table row
        }
    });

    // ... other code ...
});


function saveExpense() {
    // Prevent the default form submission if needed
    // e.preventDefault();

    var category = $('#category').val();
    var item = $('#item').val();
    var amount = $('#amount').val();

    // Assuming you don't have a specific ID for the expense and are just adding new ones
    // Create a table row with the data
    var newRow = `
        <tr>
            <td>${category}</td>
            <td>${item}</td>
            <td>$${amount}</td>
            <td><button type="button" class="btn btn-danger deleteExpense" onclick="deleteExpense(this)">Delete</button></td>
        </tr>
    `;

    // Append the new row to the table
    $('#expensesTable tbody').append(newRow);

    // Close the modal
    $('#expenseModal').modal('hide');

    // Reset the form inputs
    $('#expenseForm')[0].reset();
}

function deleteExpense(button) {
    // Remove the closest table row
    $(button).closest('tr').remove();
}
























