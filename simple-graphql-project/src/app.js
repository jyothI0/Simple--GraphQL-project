// import express from 'express';
// import bodyParser from 'body-parser';
// import  { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import schema from './schema';

// const app = express();

// const port = 3000;
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// app.use('/graphiql', graphiqlExpress({
//     endpointURL: '/graphql',
// }));
// app.listen(port, () => console.log(`Server on ${port}`));

import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import schema from './schema';

async function startApolloServer() {
    const app = express();
const port = 8000;

const server = new ApolloServer({ schema });

await server.start();

app.use('/graphql', bodyParser.json(), expressMiddleware(server));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/graphql`);
});
}
startApolloServer();