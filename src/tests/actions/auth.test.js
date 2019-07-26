import { login, logout } from '../../actions/auth';

test('Test auth action, generate login object', () => {
    const uid = 'anything';
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Test auth action, generate logout object', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});