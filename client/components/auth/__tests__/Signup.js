/* eslint-env jest */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Signup } from '../Signup';

test('Signup renders a form to sign up', () => {
  const signup = shallow(
    <Signup />
  );
  expect(signup).toMatchSnapshot();
});

test('User can enter in the signup fields', () => {
  const signupMutationMock = jest.fn();
  const signup = shallow(
    <Signup signupMutation={signupMutationMock} />
  );
  signup.find('#emailField').simulate('change', {
    target: { value: 'hello@world.com' }
  });
  signup.find('#passwordField').simulate('change', {
    target: { value: 'secretPassword' }
  });
  signup.find('#confirmPasswordField').simulate('change', {
    target: { value: 'secretPassword' }
  });
  expect(signup.state().email).toBe('hello@world.com');
  expect(signup.state().password).toBe('secretPassword');
  expect(signup.state().confirmPassword).toBe('secretPassword');
  expect(signup).toMatchSnapshot();
  signup.find('.auth-button').simulate('click');
  expect(signupMutationMock).toHaveBeenCalled();
});
