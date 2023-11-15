import React from 'react'

function Footer() {
    const d = new Date()
  return (
 
    <div className="container">
        <footer >
        <h3>
            &copy;
            {d.getFullYear()} 
        </h3>

        </footer>
 
 </div>
  )
}

export default Footer