import React from 'react';

const ColoredBubble = ({ color, number }) => {
  return (
    <div style={{ backgroundColor: color, borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      {number}
    </div>
  );
};

export default ColoredBubble;