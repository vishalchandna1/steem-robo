import { connect } from 'react-redux';
import Home from '../../components/Home/Home'

const mapStateToProps = (state) => {
  const {sc2} = state.home;
  return {
    loginUrl: sc2 ? sc2.getLoginURL() : null,
    sc2: sc2,
  }
}

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
