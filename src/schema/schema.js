exports.typeDefs = `
  type User {
    id: ID
    name: String
    email: String
  }

  type Post {
    id: ID!
    user_id: ID!
    title: String!
    description: String!
    user: User
  }

  type Query {
    getAllUsers: [User]
    getUser(id : ID!): User
    getAllPost: [Post]
  }
`;
