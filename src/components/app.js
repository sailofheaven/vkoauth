import React from 'react';
import User from './user'


export default class App extends React.Component {

    componentWillMount() {
        this.props.userActions.initVK();
    }

    render() {
        const { user } = this.props
        const { handleLogin } = this.props.userActions
        return (<div className='row'>
            <User name={user.name} handleLogin={handleLogin} error={user.error} friends={user.friends} />
        </div>)
    }
}