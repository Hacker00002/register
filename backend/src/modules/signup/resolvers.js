const { AuthenticationError } = require("apollo-server-express");
const { getUser, createUser } = require("./model");
const { jwtHelper } = require("../../helper");

module.exports = {
  Query: {
    users: async () => getUser(),
  },
  Mutation: {
    signUp: async (_, { user_name, user_email, user_password }) => {
      const [user] = await createUser(user_name, user_email, user_password);

      const accessToken = jwtHelper.sign({ id: user?.user_id });

      return {
        accessToken,
      };
    },
  },
  Users: {
    id: (global) => global.user_id,
    username: (global) => global.user_name,
    email: (global) => global.user_email,
    password: (global) => global.user_password,
  },
};
