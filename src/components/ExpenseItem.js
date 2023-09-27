import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 9, 27);
  const expenseTitle = 'Car insurance';
  const expenseAmount = 294.67;
  return(
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>

      </div>
    </div>
  )
}

export default ExpenseItem;