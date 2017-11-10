/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  schema: { _typeMap: { User } },
  resolverMap: { AllUsers, UserById },
} = require('./index');

const expect = chai.expect;

describe('User', () => {

  describe('Fields', () => {

    it('has fields id, email', () => {
      expect(User._fields).to.have.all.keys('id', 'email');
    });

    it('id is a required Int', () => {
      expect(String(User._fields.id.type)).to.equal('Int!');
    });

    it('email is a required String', () => {
      expect(String(User._fields.email.type)).to.equal('String!');
    });

  })

  describe('Resolvers', () => {

    it('UserById takes an argument and returns a User', () => {
      expect(UserById({ id: 1 })).to.deep.equal({
        id: 1,
        email: 'bobby@gmail.com',
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

  })
});
