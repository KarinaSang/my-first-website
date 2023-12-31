import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const day = date.toLocaleString("en-US", { day: "2-digit" });

    return (
        <div className="expense-date">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="day">{day}</div>
        </div>
    );
};

export default ExpenseDate;
