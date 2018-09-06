import HomeContainer from '../../components/containers/HomeContainer/HomeContainer'
import DashboardContainer from '../../components/containers/DashboardContainer/DashboardContainer'
import EditUpvotesContainer from '../../components/containers/EditUpvotesContainer/EditUpvotesContainer'

export const appRoutes = [
  {path: '/', component: HomeContainer, exact: true},
  {path: '/dashboard', component: DashboardContainer, exact: true},
  {path: '/edit-upvotes', component: EditUpvotesContainer, exact: true},
]
