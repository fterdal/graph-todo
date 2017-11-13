/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { AllUsers, UserById },
} = require('../index');
const mockUsers = require('./mocks');

const expect = chai.expect;

describe('User Resolvers', () => {

  it('UserById takes an argument and returns a User', () => {
    expect(UserById({ id: 1 })).to.deep.equal({
      id: 1,
      email: 'bobby@gmail.com',
      todoLists: [
        {
          description: 'go do some stuff',
          id: 1,
          name: 'first list',
          tasks: [
            {
              completed: false,
              id: 1,
              text: 'get milk, eggs, and bear traps',
              title: 'groceries',
            },
            {
              completed: false,
              id: 2,
              text: 'get some new pants and socks',
              title: 'clothes shopping',
            }
          ]
        },
        {
          description: 'time to feel productive!',
          id: 5,
          name: 'fifth list',
          tasks: [
            {
              completed: true,
              id: 3,
              text: "remember to mention grandpa's upcoming birthday",
              title: 'letter to grandma',
            }
          ]
        }
      ]
    });
  });

  it('AllUsers returns all Users', () => {
    const allUsers = AllUsers();
    expect(allUsers).to.have.length(4);
    expect(allUsers[1]).to.deep.equal({
      id: 2,
      email: 'ellen@yahoo.com',
    })
  });

});
