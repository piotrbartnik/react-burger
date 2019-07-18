import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() })

describe('<NavigationsItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('sould render two <nav> elements if not auth', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  });

  it('sould render three <nav> elements if auth', () => {
    wrapper.setProps({ isAuthenticated: true })
    expect(wrapper.find(NavigationItem)).toHaveLength(3)
  });

  it('sould logout exist', () => {
    wrapper.setProps({ isAuthenticated: true })
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });
})