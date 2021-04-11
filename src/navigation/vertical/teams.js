import { Info, Edit, FileText, Circle, UserPlus, Users } from 'react-feather'

export default [
  {
    header: 'My Teams'
  },
  {
    id: 'mobads',
    title: 'Mobads',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'mobadsMembersList',
        title: 'Members',
        icon: <Users size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'mobadsPreview',
        title: 'Preview',
        icon: <Info size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'mobadsEdit',
        title: 'Gestion (leader)',
        icon: <Edit size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'mobadsAdd',
        title: 'Invite (leader)',
        icon: <UserPlus size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },
  {
    id: 'adriver',
    title: 'Adriver',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'adriverMembersList',
        title: 'Members',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'adriverPreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'adriverEdit',
        title: 'Gestion (leader)',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'adriverAdd',
        title: 'Invite (leader)',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  }
]
