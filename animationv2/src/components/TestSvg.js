import React, { useState, useRef, useMemo, useEffect } from 'react'
import Tescik from './Tescik'

export default function TestSvg() {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = entries => {
        const [entry] = entries;
        console.log(entries)
        setIsVisible(entry.isIntersecting);
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        }
    }, [])

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      const currentTarget = ref.current
      if(currentTarget) observer.observe(currentTarget)

      return () => {
          if(currentTarget)observer.unobserve(currentTarget)
      }
    }, [ref, options])
    

    return (
        <div className="page">
            <div className="push">
                <div style={{ height: '300rem', position: 'relative' }}>
                    <Tescik ref={ref} height={100} />
                    <Tescik ref={ref} height={200} />
                    {console.log(isVisible ? 'is visible' : 'is not visible')}
                </div>
            </div>
        </div >
    )
}
