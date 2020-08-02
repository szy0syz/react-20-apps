import React, { useState } from 'react'


export default function Tab({ children, ...rest }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    // update highlightStyle to move the highlight
    setHighlightStyle({
      left: e.nativeEvent.layerX - 140,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }

  return (
    <div
      {...rest}
      className="tab"
      onMouseOut={hideHighlight}
      onMouseMove={moveHighlight}
    >
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}
