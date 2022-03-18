import React from 'react'

const Tescik = React.forwardRef((props, ref) => (
    <div style={{ width: '100px', height: '100px', backgroundColor: 'red', top: props.height + 'rem', left: "0", position:"absolute" }} ref={ref}></div>
));

export default Tescik
