import React from 'react'
import Friends from './friends'

export default class User extends React.Component {

    render() {
        const { name, error, friends } = this.props
        let template
        if (name) {
            template = (<div>
                <p>Привет, {name}!</p>
                <Friends data={friends} />
            </div>
            )
        } else {

            template = <button onClick={this.props.handleLogin} className="flat_button button_big_text login_button">Войти</button>

        }

        return <div className='ib user'>
            {template}
            {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
        </div>
    }
}
