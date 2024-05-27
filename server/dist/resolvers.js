// import { IResolvers } from "@graphql-tools/utils";
import User from "./models/User.js";
import StudyGroup from "./models/StudyGroup.js";
export const resolvers = {
    Query: {
        getUsers: async () => {
            const users = await User.find();
            return users;
        },
        getStudyGroups: async () => {
            const groups = await StudyGroup.find();
            return groups;
        },
        getUserCreatedGroups: async (creatorId) => {
            const groups = await StudyGroup.find(creatorId);
            return groups;
        },
    },
    Mutation: {
        addUser: async (_, args) => {
            const user = new User(args);
            await user.save();
            return user;
        },
        addStudyGroup: async (_, args) => {
            const group = new StudyGroup(args);
            await group.save();
            return group;
        },
    },
};
