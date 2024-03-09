import shoulder from '../muscle_img/shoulder.png';
import traps from '../muscle_img/back.png';
import tris from '../muscle_img/triceps.png';
import abs from '../muscle_img/abs.png';
import lats from '../muscle_img/lats.png';
import biceps from '../muscle_img/biceps.png';
import calves from '../muscle_img/calves.png';
import hams from '../muscle_img/hamstrings.png';
import glutes from '../muscle_img/glutes.png';
import quads from '../muscle_img/quads.png';
import chest from '../muscle_img/chest.png';
import NavBar from "./NavBar";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';


function MuscleView(props) {

    const [exercises, setExercise] = useState([])

    const handleCardClick = async (keyValue) => {
        const API_URL = `https://wger.de/api/v2/exercise/?muscles=${keyValue}&limit=40`
        const response = await fetch(API_URL)
        const resData = await response.json()
        if(resData.results.length > 0){
            setExercise(resData.results)
            console.log(resData.results)
        }
    };
    useEffect(() => {

    }, [])

    return (
        <div>
            <NavBar />
            <Row xs={2} md={2} className="g-4" style={{padding: '15px'}}>
                <Col>
                <Link to={`/muscles/${2}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={2} onClick={() => handleCardClick(2)}>
                        <Card.Img variant="top" src={shoulder} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Shoulders</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${9}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={9} onClick={() => handleCardClick(9)}>
                        <Card.Img variant="top" src={traps} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Traps</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${5}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={5} onClick={() => handleCardClick(5)}>
                        <Card.Img variant="top" src={tris} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Triceps</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${8}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={8} onClick={() => handleCardClick(8)}>
                        <Card.Img variant="top" src={glutes} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Glutes</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${11}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={11} onClick={() => handleCardClick(11)}>
                        <Card.Img variant="top" src={hams} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Hamstrings</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${1}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={1} onClick={() => handleCardClick(1)}>
                        <Card.Img variant="top" src={biceps} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Biceps</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${7}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={7} onClick={() => handleCardClick(7)}>
                        <Card.Img variant="top" src={calves} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Calves</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${12}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={12} onClick={() => handleCardClick(12)}>
                        <Card.Img variant="top" src={lats} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Lats</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${4}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={4} onClick={() => handleCardClick(4)}>
                        <Card.Img variant="top" src={chest} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Chest</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Col>
                <Link to={`/muscles/${10}`} style={{textDecoration: 'none'}}>
                    <Card keyValue={10} onClick={() => handleCardClick(10)}>
                        <Card.Img variant="top" src={quads} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Quads</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
                </Col>
                <Link to={`/muscles/${6}`} style={{textDecoration: 'none'}}>
                    <Card style={{margin: ' 1.5rem auto'}} keyValue={6} onClick={() => handleCardClick(6)}>
                        <Card.Img variant="top" src={abs} style={{height: '100px', width: '100px', margin: 'auto'}} />
                        <Card.Body>
                        <Card.Title>Abs</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Row>
        </div>
    )
}

export default MuscleView