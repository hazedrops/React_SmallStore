import React from 'react'

// hamburger button in natigation bar
function Hamburger({ isOpen }) {  
  const styles = {
    bar1: {
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
      margin: isOpen ? '1.45px 0 1.45px 3px' : '1.45px 0',
    },
    bar2: {
      transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
      opacity: isOpen ? '0' : '1',
      width: '17.09px',
      margin: isOpen ? '1.45px 0 1.45px 3px' : '1.45px 0',
      transition: 'none'
    },
    bar3: {
      transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
      margin: isOpen ? '1.45px 0 1.45px 3px' : '1.45px 0',
    },
  }

  return (
    <div className='hamburger'>
      <div className='bar' style={styles.bar1} />
      <div className='bar' style={styles.bar2} />
      <div className='bar' style={styles.bar3} />
    </div>
  )
}

export default Hamburger