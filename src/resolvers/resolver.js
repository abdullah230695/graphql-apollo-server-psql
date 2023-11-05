const { user } = require("pg/lib/defaults");
const { pool } = require("../utils/database");

exports.resolvers = {
  Post: {
    user: async (post) => getUserById(post.user_id),
  },
  Query: {
    getAllUsers: async () => {
      const client = await pool.connect();
      try {
        const result = await client.query("SELECT * FROM users");
        return result.rows;
      } catch (err) {
        console.log("error : ", err);
      } finally {
        client.release();
      }
    },
    getUser: async (parent, { id }) => getUserById(id),
    getAllPost: async () => {
      const client = await pool.connect();
      try {
        const result = await client.query("SELECT * FROM post");
        return result.rows;
      } catch (err) {
        console.log("error : ", err);
      } finally {
        client.release();
      }
    },
  },
};

async function getUserById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM users where id = ${id}`);
    return result.rows[0];
  } catch (err) {
    console.log("error : ", err);
  } finally {
    client.release();
  }
}
