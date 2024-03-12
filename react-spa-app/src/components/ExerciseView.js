import { useContext } from "react";
import NavBar from "./NavBar";
import { ExerciseContext } from "../context/ExerciseContext";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import heart1 from '../muscle_img/heart (1).png';
import heart2 from '../muscle_img/heart.png';

function ExerciseView() {
    const [data, setData] = useContext(ExerciseContext)
    const [activeExercise, setActiveExercise] = useState(null);
    const [exerciseLikes, setExerciseLikes] = useState(data.map(() => false));

    const toggleDescription = (index) => {
    if (activeExercise === index) {
        setActiveExercise(null);
    } else {
        setActiveExercise(index);
    }
    };
    const toggleLike = (index) => {
        const newLikes = [...exerciseLikes];
        newLikes[index] = !newLikes[index];
        setExerciseLikes(newLikes)
    }

    const simpleView = (index) => {
        return (
            <img src={heart1} style={{width: '30px'}} />
        )
    }
    const likedView = (index) => {
        return (
            <img src={heart2} style={{width: '30px'}} />
        )
    }

    return (
        <div>
            <NavBar />
            <ListGroup>
                {data.map((exercise, index) => (
                    <ListGroup.Item key={index} style={{backgroundColor: '#424a51', color: 'whitesmoke', borderColor: '#2b3035', cursor: 'pointer'}} className="exerciseItem"
                    onClick={() => toggleDescription(index)}>
                        <span style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h6>{exercise.name}</h6>
                            <div onClick={() => toggleLike(index)}>
                                {exerciseLikes[index] ? likedView(index) : simpleView(index)}
                            </div>
                        </span>
                        <div className={`description ${activeExercise === index ? 'active' : ''}`}>
                            <p>{exercise.description}</p>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default ExerciseView