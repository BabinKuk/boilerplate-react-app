import authReducer from '../../reducers/auth';

test('Test auth reducer set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('Test auth reducer clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'anything'}, action);

    expect(state).toEqual({});
});