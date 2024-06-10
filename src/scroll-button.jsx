
import React from 'react';
import ScrollUpButton from "react-scroll-up";

function ScrollButton() {
  return (
<ScrollUpButton
    ContainerClassName="scroll-up-button"
    TransitionClassName="scroll-up-transition"
    EasingType="easeOutCubic"
    AnimationDuration={500}
    showUnder={160} // Example value, adjust as needed
/>

  );
}

export default ScrollButton;
