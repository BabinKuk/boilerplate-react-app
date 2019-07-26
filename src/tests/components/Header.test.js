// react-test-renderer - for testing react components
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Test Header rendering', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});

test('Test Header startLogout', () => {
    // spy function
    const startLogout = jest.fn();

    const wrapper = shallow(<Header startLogout={startLogout} />);

    //simulate click event
    wrapper.find('button').simulate('click');

    expect(startLogout).toHaveBeenCalled();
});
