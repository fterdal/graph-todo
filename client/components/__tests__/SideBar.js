import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import { SideBar } from '../SideBar';

test('Sidebar renders when logged in', () => {
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

test('Sidebar renders when not logged in', () => {
  const notLoggedIn = { me: null };
  const sidebar = renderer.create(
    <StaticRouter context={{}}>
      <SideBar data={notLoggedIn} />
    </StaticRouter>
  );
  let sidebarTree = sidebar.toJSON();
  expect(sidebarTree).toMatchSnapshot();
});
