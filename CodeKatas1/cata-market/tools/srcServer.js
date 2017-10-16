const express = require('express');
const webpack = require('webpack');
const path = require('path');
const open = require('open');

const config = require('../webpack.common');
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
  
   app.get('*', function(req, res) {
     res.sendFile(path.join( __dirname, '../public/index.html'));
   });

  app.listen(port, function(err) {
    if (err) {
        debugger;
      console.log(err);
    } else {
        debugger;
      //open(`http://localhost:${port}`);
    }
  });