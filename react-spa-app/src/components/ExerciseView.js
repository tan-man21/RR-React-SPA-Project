import { useContext } from "react";
import NavBar from "./NavBar";
import { ExerciseContext } from "../context/ExerciseContext";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";


function ExerciseView() {
    const [data, setData] = useContext(ExerciseContext)
    const [activeExercise, setActiveExercise] = useState(null);

    const toggleDescription = (index) => {
    if (activeExercise === index) {
        setActiveExercise(null);
    } else {
        setActiveExercise(index);
    }
    };

    return (
        <div>
            <NavBar />
            <ListGroup>
                {data.map((exercise, index) => (
                    <ListGroup.Item key={index} style={{backgroundColor: '#424a51', color: 'whitesmoke', borderColor: '#2b3035', cursor: 'pointer'}} className="exerciseItem"
                    onClick={() => toggleDescription(index)}>
                        <h6>{exercise.name}</h6>
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