import React, { useState } from 'react';
import buttons from '../module_CSS/buttons.module.css';
import styles from '../module_CSS/ExerciseLogger.module.css';
import { MenuItem, Select, Tooltip } from '@mui/material';

const ExerciseAdder = ({ exerciseList, addExercise, cancelAddExercise }) => {
    const [selectedExercise, setSelectedExercise] = useState(exerciseList.length > 0 ? exerciseList[0] : { name: "No exercises added" });

    return (
        <tr>
            <td>
                {exerciseList.length === 0 ? (
                    // Show Tooltip when no exercises are listed
                    <Tooltip title="No exercises recorded. Add an exercise by creating and submitting a routine." arrow>
                        <Select 
                            value="No exercises added"  // Default value
                            sx={{
                                width: "100%",
                                color: "white", 
                                border: "1px solid white", 
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                }
                            }} 
                            readOnly // Disable dropdown functionality when no exercises
                        >
                            <MenuItem value="No exercises added">
                                No Exercises Recorded
                            </MenuItem>
                        </Select>
                    </Tooltip>
                ) : (
                    <Select 
                        value={selectedExercise.name}  // Selected exercise name
                        displayEmpty // Placeholder for exercises
                        sx={{
                            width: "100%",
                            color: "white", 
                            border: "1px solid white", 
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white',
                            }
                        }} 
                        onChange={e => {
                            setSelectedExercise(exerciseList.find(exercise => exercise.name === e.target.value));
                        }}
                    >
                        {exerciseList.map((exercise) => (
                            <MenuItem 
                                key={exercise.id} 
                                value={exercise.name}
                                sx={{
                                    color: "black", // Set text color to black for exercises
                                    backgroundColor: "white",
                                    '&:hover': {
                                        backgroundColor: "#f0f0f0",
                                    }
                                }}
                            >
                                {exercise.name}
                            </MenuItem>
                        ))}
                    </Select>
                )}
            </td>
            <td>
                {selectedExercise.weight || 0}
            </td>
            <td>
                {selectedExercise.reps || 0}
            </td>
            <td>
                {selectedExercise.setsGoal || 0}
            </td>
            <td>
                0
            </td>

            <td>
                <button 
                    className={`${buttons.button} ${buttons.editButton}`} 
                    onClick={cancelAddExercise}
                >
                    Remove
                </button>
            </td>
            <td>
                <button 
                    className={`${buttons.button} ${styles.addButton}`} 
                    onClick={() => addExercise(selectedExercise)} 
                    disabled={exerciseList.length === 0 || selectedExercise.name === "No exercises added"}
                >
                    Add
                </button>
            </td>
        </tr>
    );
};

export default ExerciseAdder;
