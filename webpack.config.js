const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// ----- Configure Node Module CommonJS -----

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

// ----- Node Server Configuration -----

const SERVER_BUILD_DIR = path.join(__dirname, 'dist/');
const SERVER_SRC_DIR = path.join(__dirname, 'server/');
const COMMON_SRC_DIR = path.join(__dirname, 'common/');

const serverConfig = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
    process: true
  },
  entry: `${SERVER_SRC_DIR}app.js`,
  output: {
    path: SERVER_BUILD_DIR,
    filename: 'server.bundle.js'
  },
  module: {
    loaders: [{
      // regex includes both .js & .jsx
      test: /.js$|.jsx$/,
      include: [
        SERVER_SRC_DIR,
        COMMON_SRC_DIR
      ],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
    new webpack.IgnorePlugin(/\.(css|less|sass|scss)$/)
  ],
  devtool: 'sourcemap'
};

// ----- Client Configurations -----

const CLIENT_BUILD_DIR = path.join(__dirname, 'dist/js/');
const CLIENT_SRC_DIR = path.join(__dirname, 'client/');

const clientLandingConfig = {
  name: 'clientLanding',
  entry: `${CLIENT_SRC_DIR}landing-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'landing-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

const clientFoodLandingConfig = {
  name: 'clientFoodLanding',
  entry: `${CLIENT_SRC_DIR}food-landing-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'food-landing-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

const clientFoodProductConfig = {
  name: 'clientFoodLanding',
  entry: `${CLIENT_SRC_DIR}food-product-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'food-product-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

const clientSearchConfig = {
  name: 'clientSearch',
  entry: `${CLIENT_SRC_DIR}search-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'search-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

const clientProfileConfig = {
  name: 'clientProfile',
  entry: `${CLIENT_SRC_DIR}profile-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'profile-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

const clientAboutConfig = {
  name: 'clientAbout',
  entry: `${CLIENT_SRC_DIR}about-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'about-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

const clientUserAppConfig = {
  name: 'clientLanding',
  entry: `${CLIENT_SRC_DIR}user-app-index.js`,
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'user-app-index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

module.exports = [
  serverConfig,
  clientLandingConfig,
  clientAboutConfig,
  clientFoodLandingConfig,
  clientFoodProductConfig,
  clientSearchConfig,
  clientProfileConfig,
  clientUserAppConfig
];
