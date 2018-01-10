/* eslint-env jest */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Logout } from '../Logout';

test('Logout renders', () => {
  const login = shallow(
    <Logout />
  );
  expect(login).toMatchSnapshot();
});

test('User can click to log out', () => {
  const logoutMutationMock = jest.fn();
  const logout = shallow(
    <Logout logoutMutation={logoutMutationMock} />
  );
  logout.find('.auth-button').simulate('click');
  expect(logoutMutationMock).toHaveBeenCalled();
});
