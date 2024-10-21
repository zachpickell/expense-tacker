# Expense Tracker

This is a simple **Expense Tracker** web application that allows users to manage their income and expenses. It calculates the total income, expenses, and the remaining balance. All data is saved using the browser's **Local Storage**, so users can maintain their budget tracking even after refreshing or closing the browser.

## Features

- **Add Income**: Users can input their income, which is stored locally.
- **Add Expenses**: Users can add expenses, providing a description and amount. These expenses are stored and displayed in a list.
- **Calculate Totals**: The app calculates and displays the total income, total expenses, and the resulting balance.
- **Persistent Data**: All income and expenses are saved in the browser's local storage, making the data persistent across sessions.
- **Reset Functionality**: A reset button clears all data from the app and local storage.

## How It Works

1. Users input their income and add various expenses (with descriptions and amounts).
2. The app keeps track of the income and expenses, displaying the updated total amounts and balance.
3. Users can reset the data, which clears the income, expenses, and local storage.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the interface and making it visually appealing.
- **JavaScript**: For handling the logic of income/expense tracking, updating the UI, and interacting with Local Storage.
- **Local Storage**: To store and persist the user’s data (income and expenses) across sessions in the browser.

## Skills Used

- **JavaScript**: 
  - DOM manipulation to dynamically update the user interface.
  - Event handling for adding expenses and calculating totals.
  - Storing and retrieving data from the browser’s Local Storage.
  
- **HTML/CSS**:
  - Designing a clean and responsive layout.
  - Structuring input forms and buttons for user interaction.
  
- **Local Storage**: 
  - Using Local Storage to persist the user’s income and expenses across browser sessions.

## How to Use

1. **Enter Your Income**: Input the total income in the designated field.
2. **Add an Expense**: Add a description and amount for each expense, then click "Add".
3. **View Your Balance**: Click "Submit" to see the total income, expenses, and the balance.
4. **Reset**: Click the "Reset" button to clear all data and start fresh.

## What could be improved?
1. Editing expenses
2. Deleting expenses without reseting everything
3. Better UI elements
4. Pie Chart to see how your money is spent visually
5. Filters to see sections
