import React from 'react';
import { Link } from 'react-router-dom';

const UserTable = ({ data }) => {

  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Doc#</th>
          <th>Doc Date</th>
          <th>Type</th>
          <th>Status</th>
          <th>AR Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((payment) => (
          <tr key={payment.DocNumber}> {/* keyを追加 */}
            <td>
              <Link to={`/details/${payment.docNumber}`}>
                {payment.docNumber}
              </Link>
            </td>
            <td>{payment.docDate}</td>
            <td>{payment.type}</td>
            <td>{payment.status}</td>
            <td>{payment.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;