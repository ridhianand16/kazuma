import dotenv from 'dotenv'
dotenv.config();

/*const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
console.log(envs);
module.exports = envs;
/* */
var constants = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT
}; /**/

export default constants;