import { useContext } from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import { ExerciseContext } from "../context/ExerciseContext";
import ListGroup from "react-bootstrap/ListGroup";


function ExerciseView() {
    const [data, setData] = useContext(ExerciseContext)

    return (
        <div>
            <NavBar />
            <ListGroup>
                {data.map((exercise, index) => (
                    <ListGroup.Item>{exercise.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default ExerciseView