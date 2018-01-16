/* eslint-env jest */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

jest.setMock(
  './server/postgres/models',
  require('./server/postgres/models/__mocks__'),
)

enzyme.configure({ adapter: new Adapter() });
