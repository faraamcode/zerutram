import React from 'react'
import { memo } from 'react'

export const Header = memo(function Header ({ message }) {
  console.log('You re- render me')
  return <div>{message}</div>
})
