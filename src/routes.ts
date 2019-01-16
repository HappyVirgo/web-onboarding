import { Chat } from './pages/Chat'
import { LazyDontPanic } from './pages/DontPanic'
import { Download } from './pages/Download'
import { FourOhFour } from './pages/FourOhFour'
import { NewMemberLanding } from './pages/NewMemberLanding'
import { Offering } from './pages/Offer'
import { Sign } from './pages/Sign'

export const reactPageRoutes = [
  { path: '/new-member', Component: NewMemberLanding, exact: true },
  { path: '/new-member/hedvig', Component: Chat, exact: true },
  { path: '/new-member/offer', Component: Offering, exact: true },
  { path: '/new-member/download', Component: Download, exact: true },
  { path: '/new-member/sign', Component: Sign, exact: true },
  { path: '/dont-panic', Component: LazyDontPanic, exact: true },
  { path: '/*', Component: FourOhFour },
]
