import React from 'react'
import { Button } from 'react-bootstrap'
import './Button.css'

const button = props =>

  <Button className='button' variant={props.variant} size={props.size}
    onClick={props.onClick}
    disabled={props.disabled || props.loading}
    type={props.type}>
    {props.name}
  </Button>

export default button
