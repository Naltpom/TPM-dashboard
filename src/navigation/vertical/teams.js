import { Info, Edit, FileText, Folder, UserPlus, Users } from 'react-feather'

export default [
  {
    header: 'My Teams'
  },
  {
    id: 'adriverCorp',
    title: 'Adriver-Corp',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'adriverCorpPreview',
        title: 'Preview',
        icon: <Info size={12} />,
        navLink: '/team/view'
      },
      {
        id: 'adriverCorpMembersList',
        title: 'Members',
        icon: <Users size={12} />,
        navLink: '/team/members/list'
      },
      {
        id: 'adriverCorpAdd',
        title: 'Invite (leader)',
        icon: <UserPlus size={12} />,
        navLink: '/team/members/invite'
      },
      {
        id: 'adriverCorpApps',
        title: 'Applications',
        icon: <Folder size={12} />,
        badge: 'light-info',
        badgeText: '9',
        children: [
          {
            id: 'appACNotifier',
            title: 'Notifier',
            navLink: '/team/app/notifier'
          },
          {
            id: 'appMobads',
            title: 'Mobads',
            navLink: '/team/app/mobads',
            badge: 'light-info',
            badgeText: '5'
          },
          {
            id: 'appAdriver',
            title: 'Adriver',
            navLink: '/team/app/adriver',
            badge: 'light-info',
            badgeText: '3'
          }
        ]
      }
    ]
  },
  {
    id: 'tpm',
    title: 'T.P.M.',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'atpmPreview',
        title: 'Preview',
        icon: <Info size={12} />,
        navLink: '#'
      },
      {
        id: 'tpmMembersList',
        title: 'Members',
        icon: <Users size={12} />,
        navLink: '#'
      },
      {
        id: 'tpmAdd',
        title: 'Invite (leader)',
        icon: <UserPlus size={12} />,
        navLink: '/'
      },
      {
        id: 'tpmApps',
        title: 'Applications',
        icon: <Folder size={12} />,
        badge: 'light-info',
        badgeText: '2',
        children: [
          {
            id: 'appTPMServer',
            title: 'API',
            navLink: '#'
          },
          {
            id: 'appTpmDashboard',
            title: 'Dashboard',
            navLink: '#'
          }
        ]
      }
    ]
  }
]
