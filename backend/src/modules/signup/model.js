const { fetch } = require("../../setting");

const GET_ALL_USERS = `
    select * from users
`;

const CREATE_NEW_USER = `
    insert into users(user_name,user_email,user_password) values($1,$2,crypt($3, gen_salt('bf', 4))) RETURNING user_id
`;

const getUser = () => fetch(GET_ALL_USERS);
const createUser = (user_name, user_email, user_password) =>
  fetch(CREATE_NEW_USER, user_name, user_email, user_password);

module.exports = {
  getUser,
  createUser,
};
