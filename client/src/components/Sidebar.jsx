import React from 'react';
import ColoredBubble from './ColoredBubble';

const Sidebar = ({ workoutCount }) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <ColoredBubble color="#ff7f7f" number={workoutCount.upperBody || 0} />
        <ColoredBubble color="#7fbfff" number={workoutCount.lowerBody || 0} />
        <ColoredBubble color="#7fff7f" number={workoutCount.core || 0} />
        <ColoredBubble color="#ffa500" number={workoutCount.misc || 0} />
      </div>
    </div>
  );
};

export default Sidebar;