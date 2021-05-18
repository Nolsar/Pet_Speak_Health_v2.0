const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

// module.exports = {
//     USER_NAME: '',
//     PASSWORD: ''
// };