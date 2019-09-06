import React from 'react';

export default function CompanyHeader(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <img src={props.companyLogo} style={{ height: '200px', width: '200px' }}></img>
        <h5>{props.companyName}</h5>
        <button className="btn">Create New Campaign</button>
      </div>
    </div>
  );
}
