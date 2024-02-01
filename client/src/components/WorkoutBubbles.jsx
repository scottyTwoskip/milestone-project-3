
import React from 'react';
import ColoredBubble from './ColoredBubble';

const WorkoutBubbles = ({ workoutCounts }) => {
  const bubbleColors = ["#ff7f7f", "#7fbfff", "#7fff7f", "#ffa500"];

  return (
    <div>
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