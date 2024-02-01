import React from 'react';
import ColoredBubble from './ColoredBubble';
import '../index.css'

const WorkoutBubbles = ({ workoutCounts }) => {
  const bubbleColors = ["#ff7f7f", "#7fbfff", "#7fff7f", "#ffa500"];

  return (
    <div className='bubble-container'>
      {workoutCounts.map((count, index) => (
        <ColoredBubble
          key={index}
          color={bubbleColors[index]}
          number={count}
        />
      ))}
    </div>
  );
};

export default WorkoutBubbles;