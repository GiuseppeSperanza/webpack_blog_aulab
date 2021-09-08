const path = require('path'); // funzione fornita da Node.js

module.exports = {
  mode: 'development',
  entry: './src/index.js', // file iniziale letto da webpack
  output: {
    filename: 'main.js', // file generato per il bundle
    path: path.resolve(__dirname, 'dist'),
  },
};

