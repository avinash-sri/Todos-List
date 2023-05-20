import React from 'react'

export const Footer = () => {
  let footerStyle = {
    width:"100%",
    position:'relative',
    top:"30vh"
  }
  return (
    <footer className="bg-dark text-light my-3" style={footerStyle}>      
      <div className="text-center bg-dark py-3">
        <p className="mb-0">&copy; 2023 My Todo List. All rights reserved.</p>
      </div>
    </footer>
  )
}
