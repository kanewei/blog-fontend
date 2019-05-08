import React from 'react'
import { Link } from 'react-router-dom'
import './TableRow.css'

const tr = props =>
  <tr>
    <td>{props.data.date}</td>
    <td><Link to={'/article/' + props.data._id}>{props.data.title}</Link></td>
    <td>{props.data.author}</td>
  </tr>

export default tr
