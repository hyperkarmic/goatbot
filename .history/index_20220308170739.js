const lyrics = require('./lyrics')

require('dotenv').config() // requiring and running dotenv
const Twit = require('twit') // requiring twit
fs = require('fs')

console.log('bot is working')

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let newGoat =ff
const rndInt = String(randomIntFromInterval(1, 20))
const goatURL = `./img/${rndInt}.jpg`
const metalQuote = lyrics[Math.floor(Math.random() * lyrics.length)]
console.log(goatURL)
console.log(metalQuote)

// console.log(process.env.consumer_key)
// console.log(process.env.consumer_secret)
// console.log(process.env.access_token)
// console.log(process.env.access_token_secret)

const client = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true,
})

// client.post(
//   'statuses/update',
//   { status: 'hello world!' },
//   function (err, data, response) {
//     console.log(data)
//   }
// )

// post a tweet with media
//
var b64content = fs.readFileSync(goatURL, { encoding: 'base64' })

// first we must post the media to Twitter
client.post(
  'media/upload',
  { media_data: b64content },
  function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = 'Small flowers in a planter on a sunny balcony, blossoming.'
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    client.post(
      'media/metadata/create',
      meta_params,
      function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          var params = {
            status: metalQuote + ' ' + '#goats',
            media_ids: [mediaIdStr],
          }

          client.post(
            'statuses/update',
            params,
            function (err, data, response) {
              console.log(data)
            }
          )
        }
      }
    )
  }
)
