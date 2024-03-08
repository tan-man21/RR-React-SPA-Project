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

    return (
        <div>
            <NavBar />
            <Row xs={2} md={2} className="g-4" style={{padding: '15px'}}>
                <Col key={1}>
                <Card>
                    <Card.Img variant="top" src={shoulder} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Shoulders</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={traps} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Traps</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={tris} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Triceps</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={glutes} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Glutes</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={hams} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Hamstrings</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={biceps} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Biceps</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={calves} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Calves</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={lats} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Lats</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={chest} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Chest</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={quads} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Quads</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Card style={{margin: ' 1.5rem auto'}}>
                    <Card.Img variant="top" src={abs} style={{height: '100px', width: '100px', margin: 'auto'}} />
                    <Card.Body>
                    <Card.Title>Abs</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default MuscleView