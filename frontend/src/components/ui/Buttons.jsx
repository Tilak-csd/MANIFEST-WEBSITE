import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Buttons({label, to, classname=""}) {
  return (
    <NavLink to={to} className={`px-6 py-3 rounded-md bg-red-500 hover:scale-105 transform transition-all text-white font-semibold ${classname}`}>{label}</NavLink>
  )
}
