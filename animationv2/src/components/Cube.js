import React from 'react'

export default function Cube() {
    function createCube(counter) {
        return (
            <div className={`cube cube${counter}`} key={counter}>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
            </div>
        )
    }
    return (
        <div className='animation-3d'>
            <div className="box">
                {Array(27).fill(false).map((el, counter) => createCube(counter))}
            </div>
        </div>
    )
}
