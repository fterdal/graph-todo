/* eslint-env jest */
const {
  login,
  logout,
  signup,
} = require('../index');

describe('auth mutations', () => {

  let user, input, req, res, models;
  beforeEach(() => {
    user = {
      id: 7,
      email: 'harrypotter@hogwarts.edu',
      correctPassword: pw => pw === 'ExpectoPatronum',
    };
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
        findOne: jest.fn(({ where: { email } }) => {
          if (email !== 'harrypotter@hogwarts.edu') {
            return null;
          }
          return user;
        }),
      }
    };
  })

  test('signup creates user and logs in', async () => {
    const createdUser = await signup(null, { input }, { req, res, models });
    expect(createdUser).toEqual(user);
    expect(res.status).not.toHaveBeenCalled();
    expect(req.login).toHaveBeenCalled();
  })

  test('signup fails when user already exists', async () => {
    input.email = 'hagrid@hogwarts.edu';
    try {
      await signup(null, { input }, { req, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('User Already Exists'))
    }
  })

  test('login logs the user in', async () => {
    const loggedInUser = await login(null, { input }, { req, res, models });
    expect(loggedInUser).toEqual(user);
    expect(res.status).not.toHaveBeenCalled();
    expect(req.login).toHaveBeenCalled();
  })

  test('login fails when the user does not exist', async () => {
    input.email = 'hermione@hogwarts.edu';
    try {
      await login(null, { input }, { req, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('User Not Found'))
    }
  })

  test('login fails when the credentials are invalid', async () => {
    input.password = '10points4gryffindor';
    try {
      await login(null, { input }, { req, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('Invalid Credentials'))
    }
  })

  test('logout logs the user out', () => {
    req.user = user;
    const loggedOutUser = logout(null, null, { req });
    expect(req.logout).toHaveBeenCalled();
    expect(loggedOutUser).toEqual(user)
  })
})