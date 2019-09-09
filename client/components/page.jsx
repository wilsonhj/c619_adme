import React from 'react';

export default function Page(props) {

  return (
    <div>
      <button onClick={props.setViewToCompany}>Navigate to company dashboard</button>
      <button onClick={props.setViewToCreator}>Navigate to user portfolio</button>
    </div>
  );
}
