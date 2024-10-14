import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = ({ data }) => {
  const { id } = useParams();
  //const payment = data.find((item) => item.docNumber === id);
  const payment = data.find((item) => String(item.docNumber) === id);

  if (!payment) {
    return <p>No data</p>;
  }

  return (
    <div className="container">
      <h1 className="title">Detail</h1>
      <ul>
        <li><strong>Doc Number:</strong> {payment.docNumber}</li>
        <li><strong>Doc Date:</strong> {payment.docDate}</li>
        <li><strong>Type:</strong> {payment.type}</li>
        <li><strong>Status:</strong> {payment.status}</li>
        <li><strong>AR Amount:</strong> {payment.amount}</li>
      </ul>
      <Link to="/" className="button is-link">Back to List</Link>
    </div>
  );
};

export default Detail;