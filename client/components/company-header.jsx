import React from 'react';
// import { Card, CardImg, Button } from 'reactstrap';

export default function CompanyHeader(props) {
  return (
    <div className="row background-light justify-content-around align-items-center companyHeader" style={{ backgroundColor: '#CAC4CE' }}>
      {/* <Card className="text-center" style={{ backgroundColor: '#242038' }}>
        <h3 style={{ color: 'white' }}>{props.companyName}</h3>
        <CardImg src={props.companyLogo} className="rounded mx-auto" style={{ height: '100px', width: '100px', backgroundSize: 'cover' }}></CardImg>
        <Button color="light" style={{ width: '200px' }} className="btn mx-auto mt-3 mb-3">Create Campaign</Button>{' '}
      </Card> */}
      {/* <div className="ml-5"> */}
      <img src={props.companyLogo} className="rounded-circle mt-1" style={{ backgroundSize: 'contain', height: '75px' }}></img>
      <div className="mt-1" style={{ color: '#9067C6' }}>
        <p className="mb-0">{props.companyName}</p>
        <p className="ml-1 mb-1" style={{ fontSize: '0.8rem' }}>{props.companyType}</p>
        <button className="btn my-auto createCampaignButton" onClick={() => props.setView()}style={{ height: '30px', width: '130px', backgroundColor: 'white', fontSize: '0.75rem' }}>Create Campaign</button>
      </div>

      {/* </div> */}

    </div>
  );
}
