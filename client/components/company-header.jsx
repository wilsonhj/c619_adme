import React from 'react';

export default function CompanyHeader(props) {
  const style = {};
  style.image = {
    backgroundSize: 'contain',
    height: '75px'
  };
  style.div = {
    color: '#9067C6'
  };
  style.button = {
    height: '30px',
    width: '130px',
    backgroundColor: 'white',
    fontSize: '0.75rem'
  };

  return (
    <div className="row background-light justify-content-around align-items-center companyHeader" style={{ backgroundColor: '#CAC4CE' }}>
      <img src={props.companyLogo} className="rounded-circle mt-1" style={style.image}></img>
      <div className="mt-1" style={style.div}>
        <p className="mb-0">{props.companyName}</p>
        <p className="ml-1 mb-1" style={{ fontSize: '0.8rem' }}>{props.companyType}</p>
        <button className="btn my-auto createCampaignButton" onClick={() => props.setView()} style={style.button}>Create Campaign</button>
      </div>
    </div>
  );
}
