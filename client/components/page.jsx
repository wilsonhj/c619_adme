import React from 'react';

export default function Page(props) {

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.setView}>Navigate</button>
    </div>
  );
}
