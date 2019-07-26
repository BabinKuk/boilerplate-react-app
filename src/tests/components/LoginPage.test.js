import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/LoginPage';

test('Test LoginPage rendering', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Test LoginPage startLogin', () => {
    // spy function
    const startLogin = jest.fn();

    const wrapper = shallow(<LoginPage startLogin={startLogin} />);

    //simulate click event
    wrapper.find('button').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});

