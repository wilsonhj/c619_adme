import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';

export default function CompanyHeader(props) {
  return (
    <div>
      <Card className="text-center" style={{ backgroundColor: '#242038' }}>
        <h3 style={{ color: 'white' }}>{props.companyName}</h3>
        <CardImg src={props.companyLogo} className="rounded mx-auto" style={{ height: '100px', width: '100px', backgroundSize: 'cover' }}></CardImg>
        <Button color="light" style={{ width: '200px' }} className="btn mx-auto mt-3 mb-3">Create Campaign</Button>{' '}
      </Card>
    </div>
  );
}
