import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - TPM React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/team/view',
    component: lazy(() => import('../../views/teams/Preview'))
  },
  {
    path: '/team/members/list',
    component: lazy(() => import('../../views/teams/Members'))
  },
  {
    path: '/team/members/edit',
    component: lazy(() => import('../../views/teams/Gestion'))
  },
  {
    path: '/team/members/invite',
    component: lazy(() => import('../../views/teams/Invite'))
  },
  {
    path: '/team/app/mobads',
    component: lazy(() => import('../../views/teams/app/Mobads'))
  },
  {
    path: '/team/app/notifier',
    component: lazy(() => import('../../views/teams/app/Notifier'))
  },
  {
    path: '/team/app/adriver',
    component: lazy(() => import('../../views/teams/app/Adriver'))
  },

  {
    path: '/ticket/all',
    component: lazy(() => import('../../views/tickets/AllTickets'))
  },
  {
    path: '/ticket/my',
    component: lazy(() => import('../../views/tickets/MyTickets'))
  },
  {
    path: '/ticket/view',
    component: lazy(() => import('../../views/tickets/View'))
  },
  {
    path: '/ticket/create',
    component: lazy(() => import('../../views/tickets/Create'))
  },

  {
    path: '/login',
    component: lazy(() => import('../../views/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/authentication/Register')),
    layout: 'BlankLayout'
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
