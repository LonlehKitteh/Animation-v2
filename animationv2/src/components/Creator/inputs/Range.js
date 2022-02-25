import React, { useState } from 'react'

function Range() {
    const [value, setValue] = useState(0)

    return (
        <div><input type="range" defaultValue="0" min="-100" max="100" onChange={e => setValue(e.target.value)} />{value}</div>
    )
}

export default Range