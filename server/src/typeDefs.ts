// import { gql } from "apollo-server-express";

export const typeDefs = `#graphql
    type User {
        _id: ID
        name: String
        email: String
        password: String
        profilePic: String
    }

    type StudyGroup {
        _id: ID
        creatorId: ID!
        subject: String
        time: String
        address: String
        participants: [User]
    }

    type Query {
        getUsers: [User]
        getStudyGroups: [StudyGroup]
        getUserCreatedGroups(creatorId: ID): [StudyGroup]
    }

    input UserInput {
        name: String
        email: String
        password: String
        profilePic: String
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): User
        addStudyGroup(creatorId: ID!, subject: String!, time: String!, address: String!, particiapants: [UserInput]): StudyGroup
    }
`;
