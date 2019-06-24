import { render } from 'react-dom'
import React from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './styles.css'
import pingu from '../assets/pingu.png'

export default function PullGuin() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
  })
  return <animated.div className="pingu" {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),content:`url(${pingu})` }} />
}

