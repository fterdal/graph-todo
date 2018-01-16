/* eslint-env jest */
const {
  login,
  logout,
  signup,
} = require('../index');

const models = require('../../../../postgres/models');

const { reset } = require('../../../../postgres/models/__mocks__/mockData');

describe('auth mutations', () => {

  let user, req, res;
  beforeEach(() => {

    ({
      user,
      req,
      res,
    } = reset());
    user.correctPassword = pw => pw === 'ExpectoPatronum';
    jest.clearAllMocks();

    // user = {
    //   id: 7,
    //   email: 'harrypotter@hogwarts.edu',
    //   correctPassword: pw => pw === 'ExpectoPatronum',
    // };
    // input = {
    //   email: 'harrypotter@hogwarts.edu',
    //   password: 'ExpectoPatronum',
    // };
    // req = {
    //   login: jest.fn(),
    //   logout: jest.fn(),
    // };
    // res = { status: jest.fn() };
    // models = {
    //   User: {
    //     create: jest.fn(({ email }) => {
    //       if (email === 'hagrid@hogwarts.edu') {
    //         throw new Error()
    //       }
    //       return user;
    //     }),
    //     findOne: jest.fn(({ where: { email } }) => {
    //       if (email !== 'harrypotter@hogwarts.edu') {
    //         return null;
    //       }
    //       return user;
    //     }),
    //   }
    // };
  })

  test('signup creates user and logs in', async () => {
    const input = {
      email: 'harrypotter@hogwarts.edu',
      password: 'ExpectoPatronum',
    };
    const createdUser = await signup(null, { input }, { req, res, models });
    expect(createdUser).toEqual(user);
    expect(res.status).not.toHaveBeenCalled();
    expect(req.login).toHaveBeenCalled();
  })

  test('signup fails when user already exists', async () => {
    const input = {
      email: 'hagrid@hogwarts.edu',
      password: 'ExpectoPatronum',
    };
    try {
      await signup(null, { input }, { req, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('User Already Exists'))
      expect(res.status).toHaveBeenCalledWith(400);
    }
  })

  test('login logs the user in', async () => {
    const input = {
      email: 'harrypotter@hogwarts.edu',
      password: 'ExpectoPatronum',
    };
    const loggedInUser = await login(null, { input }, { req, res, models });
    expect(loggedInUser).toEqual(user);
    expect(res.status).not.toHaveBeenCalled();
    expect(req.login).toHaveBeenCalled();
  })

  test('login fails when the user does not exist', async () => {
    const input = {
      email: 'hermione@hogwarts.edu',
      password: 'ExpectoPatronum',
    };
    try {
      await login(null, { input }, { req, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('User Not Found'))
    }
  })

  test('login fails when the credentials are invalid', async () => {
    const input = {
      email: 'harrypotter@hogwarts.edu',
      password: '10points4gryffindor',
    };
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
