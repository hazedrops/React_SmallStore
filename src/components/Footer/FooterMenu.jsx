import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

function FooterMenu({ listName, listItems, collapsed }) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed)

  return (
    <div className='footerMenuSingle'>
      <div className='footerMenuTitle'>
        <p className='title'>{listName}</p>
        <span
          className='expandOption'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <FaPlus className='sign' />
          ) : (
            <FaMinus className='sign' />
          )}
        </span>
      </div>

      <div
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        <ul className='footerMenuUl'>
          {listItems.map((item) => (
            <li key={item} className='footerMenuList'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterMenu
