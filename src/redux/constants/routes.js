import HomeContainer from '../../components/containers/HomeContainer/HomeContainer'
import DashboardContainer from '../../components/containers/DashboardContainer/DashboardContainer'
import EditUpvotesContainer from '../../components/containers/EditUpvotesContainer/EditUpvotesContainer'
import FaqsContainer from '../../components/containers/FaqsContainer/FaqsContainer'
import HowItWorksContainer from '../../components/containers/HowItWorksContainer/HowItWorksContainer'

export const appRoutes = [
  {path: '/', component: HomeContainer, exact: true},
  {path: '/dashboard', component: DashboardContainer, exact: true},
  {path: '/edit-upvotes', component: EditUpvotesContainer, exact: true},
  {path: '/faqs', component: FaqsContainer, exact: true},
  {path: '/how-it-works', component: HowItWorksContainer, exact: true},
]
