import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Notifications() {
  return (
    <div>
      <h1>This is a Notification Page.</h1>
      <NavLink to="http://localhost:3001/">Go to Dashboard</NavLink>
    </div>
  )
}
