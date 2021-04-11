import { FileText, Circle, CheckSquare } from 'react-feather'

export default [
  {
    header: 'Tickets'
  },
  {
    id: 'ticketAll',
    title: 'All tickets',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo',
    badge: 'light-info',
    badgeText: '12'
  },
  {
    id: 'ticketMy',
    title: 'My tickets',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo',
    badge: 'light-warning',
    badgeText: '2'
  },
  {
    id: 'ticketTeams',
    title: 'Teams',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'ticketMobads',
        title: 'Mobads',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'ticketAdriver',
        title: 'Adriver',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      }
    ]
  }
]
