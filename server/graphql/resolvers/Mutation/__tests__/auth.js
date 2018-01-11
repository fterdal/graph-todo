/* eslint-env jest */
const auth = require('../auth');

describe('auth mutations', () => {

  let user, input, req, res, models;
  beforeEach(() => {
    user = {
      id: 7,
      email: 'harrypotter@hogwarts.edu',
    }
    input = {
      email: 'harrypotter@hogwarts.edu',
      password: 'ExpectoPatronum',
    };
    req = {
      login: jest.fn(),
      logout: jest.fn(),
    };
    res = { status: jest.fn() };
    models = {
      User: {
        create: jest.fn(({ email }) => {
          if (email === 'hagrid@hogwarts.edu') {
            throw new Error()
          }
          return user;
        }),
        findOne: jest.fn(),
      }
    };
  })

  test('signup creates user and logs in', async () => {
    const createdUser = await auth.signup(null, { input }, { req, res, models });
    expect(createdUser).toEqual(user);
    expect(res.status).not.toHaveBeenCalled();
    expect(req.login).toHaveBeenCalled();
  })

  test('signup fails when user already exists', async () => {
    input.email = 'hagrid@hogwarts.edu';
    try {
      await auth.signup(null, { input }, { req, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('User Already Exists'))
    }
  })

  test('login', () => {

  })

  test('logout', () => {

  })
})
