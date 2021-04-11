import { FileText, Circle, CheckSquare } from 'react-feather'

export default [
  {
    header: 'Tickets'
  },
  {
    id: 'ticketAll',
    title: 'All tickets',
    icon: <CheckSquare size={20} />,
    navLink: '/ticket/all',
    badge: 'light-warning',
    badgeText: '12'
  },
  {
    id: 'ticketMy',
    title: 'My tickets',
    icon: <CheckSquare size={20} />,
    navLink: '/ticket/my',
    badge: 'light-warning',
    badgeText: '2'
  },
  {
    id: 'ticketTeams',
    title: 'Teams',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'ticketAdriverCorp',
        title: 'Adriver-Corp',
        icon: <Circle size={12} />,
        navLink: '#'
      },
      {
        id: 'ticketTPM',
        title: 'T.P.M.',
        icon: <Circle size={12} />,
        navLink: '#'
      }
    ]
  }
]
