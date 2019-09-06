import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';

export default function CompanyHeader(props) {
  return (
    <div>
      <Card className="text-center light" style={{ backgroundColor: '#242038' }}>
        <h3 style={{ color: 'white' }} className="shadow">{props.companyName}</h3>
        <CardImg src={'https://files.slack.com/files-pri/T1EHQUJ8J-FN3SSC17S/targetlogo.png'} className="rounded mx-auto shadow" style={{ width: '150px', height: '150px', backgroundSize:'contain' }}></CardImg>
        <Button color="light" style={{ width: '250px' }} className="btn mx-auto mt-3 mb-3">Create Campaign</Button>{' '}
      </Card>
    </div>
  );
}
