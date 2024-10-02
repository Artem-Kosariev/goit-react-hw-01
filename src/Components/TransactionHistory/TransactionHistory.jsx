import css from './TransactionHistory.module.css';

const TransactionHistory = ({transactions }) => (
  <table className={css.transactionTable }>
    <thead className={css.hederRow}>
      <tr className={css.valuesRow}>
        <th className={css.columnHeader}>Type</th>
        <th className={css.columnHeader}>Amount</th>
        <th className={css.columnHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td className={css.transactionData}>{item.type}</td>
          <td className={css.transactionData}>{item.amount}</td>
          <td className={css.transactionData}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory