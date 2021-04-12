// ** Dropdowns Imports
import { Fragment } from 'react'
import UserDropdown from './UserDropdown'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Sun, Moon, Menu, PlusSquare } from 'react-feather'
import { NavItem, NavLink } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <NavItem className='d-block'>
          <NavLink className='d-flex align-items-center' tag={Link} to='/ticket/create'>
            <PlusSquare className="mr-01"/>
            <span className='d-none d-lg-block'>Add Ticket</span>
          </NavLink>
        </NavItem>
      </div>
      <ul className='nav navbar-nav align-items-center ml-auto'>
        <NavItem className='d-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
        <UserDropdown />
      </ul>
    </Fragment>
  )
}
export default NavbarUser
