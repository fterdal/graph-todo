const fs = require('fs');
const { buildSchema } = require('graphql');

const schemaTxt = fs.readFileSync('./server/graphql/schema.graphql', 'utf-8');
let resolverMap = require('./resolverMap');
let TodoListResolvers =  {
  TodoList: {
    name: () => { return 'a name' },
    tasks: () => {
      console.log('~~~~~~~~~~~~~~~');
      console.log('~~~~ HELLO ~~~~');
      console.log('~~~~~~~~~~~~~~~');
      return [
        {
          id: 3,
          title: 'asd',
          text: 'dgdfg',
          comleted: true
        },
        {
          id: 4,
          title: 'asdsdf',
          text: 'dgdfgjghjghj',
          comleted: false
        },
      ]
    }
  }
}

const schema = buildSchema(schemaTxt);
// console.log('~~~~ SCHEMA ===>', schema);
// console.log('~~~~ resolverMap ===>', resolverMap);

module.exports = { schema, resolverMap };
