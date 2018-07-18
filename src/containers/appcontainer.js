import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/user-actions'
import App from '../components/app'

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)