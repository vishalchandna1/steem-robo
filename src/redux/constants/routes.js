import HomeContainer from '../../components/containers/HomeContainer/HomeContainer'
import DashboardContainer from '../../components/containers/DashboardContainer/DashboardContainer'

export const appRoutes = [
  {path: '/', component: HomeContainer, exact: true},
  {path: '/dashboard', component: DashboardContainer, exact: true},
]
