import React from 'react';
import { SideBar } from '../SideBar';
import renderer from 'react-test-renderer';

test('Sidebar renders when logged in', () => {
  // const notLoggedIn = { me: null };
  const loggedIn = {
    me: {
      id: 7,
      email: 'hello@world.com',
    }
  };
  const sidebar = renderer.create(
    <SideBar data={loggedIn} />,
  );
  let sidebarTree = sidebar.toJSON();
  expect(sidebarTree).toMatchSnapshot();
});

xtest('Sidebar renders when not logged in', () => {
  const notLoggedIn = { me: null };
  const sidebar = renderer.create(
    <SideBar data={notLoggedIn} />,
  );
  let sidebarTree = sidebar.toJSON();
  expect(sidebarTree).toMatchSnapshot();
});
