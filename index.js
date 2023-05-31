import { buildSchema, graphql } from 'graphql';

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

/**
 * The root provides a resolver functions
 *
 * @param {any} parent - The result of the parent resolver function.
 * @param {Object} args - An object containing the arguments passed to the query field.
 * @param {Object} context - An object containing shared data or functionality for all resolvers.
 * @param {Object} info - An object containing information about the execution state of the query.
 */
var rootValue = {
  hello: (parent, args, context, info) => {
    return 'Hello, world!!';
  },
};

var query = '{ hello }';

graphql({
  schema,
  source: query,
  rootValue,
}).then((response) => {
  console.log(JSON.stringify(response, null, 2));
});
