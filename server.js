const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT, () => {
    console.log('SERVER READY ON PORT ' + PORT)
});