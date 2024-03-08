import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function YourWayCard() {

    return (
    <div className='d-flex align-items-center justify-content-center' style={{height: '90vh'}}>
        <Card
          style={{ width: '18rem', height: '25%'}}
          className="mb-2"
          bg='light'
          data-bs-theme='light'
        >
          <Card.Body>
            <Card.Title> Fitness Your Way </Card.Title>
            <Button variant='info' className='mt-4' href='/muscles'>Create a Workout</Button>
          </Card.Body>
        </Card>
    </div>
    )
}

export default YourWayCard