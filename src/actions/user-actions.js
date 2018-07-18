import {
    AUTH_REQUEST,
    AUTH_SUCCES,
    AUTH_FAIL,
    GET_FRIENDS
} from './actions'

const getFriends = dispatch => {
    VK.api(
        'friends.get',
        {
            fields: ['uid', 'first_name', 'last_name', 'photo_50'],
            count: 5,
            v: '5.80'
        },
        r => {
            if (r.response) {
                dispatch({
                    type: GET_FRIENDS,
                    payload: r.response.items
                })
            }
        }
    )
}

export const initVK = () => dispatch => {
    dispatch({
        type: 
    });

    VK.Auth.getLoginStatus(r => {
        if (r.session) {

            VK.Api.call('users.get', { v: 5.80 }, result => {
                var user;
                if (result.response) {
                    user = result.response[0];
                    let username = user.first_name;

                    dispatch({
                        type: AUTH_SUCCES,
                        payload: username
                    })

                    getFriends(dispatch)
                }
            });

        }

    });
}

export const handleLogin = () => dispatch => {

    dispatch({
        type: AUTH_REQUEST
    })

    VK.Auth.login((r) => { // eslint-disable-line no-undef
        if (r.session) {
            console.log(r)
            let username = r.session.user.first_name;

            dispatch({
                type: AUTH_SUCCES,
                payload: username
            });
            getFriends(dispatch)

        } else {
            dispatch({
                type: AUTH_FAIL,
                error: true,
                payload: new Error('Ошибка авторизации')
            })
        }
    }, 4);
}

