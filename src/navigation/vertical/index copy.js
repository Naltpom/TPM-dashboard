import { Mail, Home, LogIn, UserPlus } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'team',
    title: 'Team',
    icon: <Home size={20} />,
    navLink: '/team'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'login',
    title: 'Login',
    icon: <LogIn size={20} />,
    navLink: '/login'
  },
  {
    id: 'register',
    title: 'Register',
    icon: <UserPlus size={20} />,
    navLink: '/register'
  }
]
