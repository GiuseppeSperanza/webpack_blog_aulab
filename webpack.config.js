const path = require('path'); // funzione fornita da Node.js

module.exports = {
  mode: 'development',
  entry: './src/index.js', // file iniziale letto da webpack
  output: {
    filename: 'bundle.js', // file generato per il bundle
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // -> Regex per carcare solo file CSS
        use: ['style-loader', 'css-loader'] // -> Loader da usare e in che ordine
      }
    ]
  }
};


