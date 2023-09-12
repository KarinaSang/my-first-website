import "./App.css";

import Expenses from "../components/expenses/Expenses";

const App = () => {
    const expenses = [
        { title: "Food", amount: 40, date: new Date(2023, 9, 2) },
        { title: "Car", amount: 400, date: new Date(2023, 9, 20) },
        { title: "Rent", amount: 4000, date: new Date(2023, 9, 20) },
    ];

    return (
        <Expenses items={expenses} />
    );
};

export default App;
