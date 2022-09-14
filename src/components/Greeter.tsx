import React from 'react'
import { GreeterProps } from '../models/item'

export default function Greeter({person}: GreeterProps):JSX.Element {
  return (
    <div>{person}</div>
  )
}
