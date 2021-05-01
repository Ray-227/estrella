const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

let currentMode;
if (isDev) {
  currentMode = 'development';
} else {
  currentMode = 'production';
}


const fileName = (path, ext) => isDev ? `${path}/[name].${ext}` : `${path}/[name].[hash:8].${ext}`;


const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
};


const cssLoaders = extra => {
  const loaders = [{
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
        publicPath: '../'
      },
    },
    'css-loader'
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};


const babelOptions = preset => {
  const options = {
    presets: [
      '@babel/preset-env'
    ]
  };

  if (preset) {
    options.presets.push(preset);
  }

  return options;
};


const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions(),
  }];

  return loaders;
};


const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      //favicon: './favicon.svg',
      inject: true,
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: fileName('style', 'css'),
    }),
  ];

  return base;
};


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: currentMode,
  entry: {
    app: './js/index.jsx',
    // analytics: './js/analytics.js',
  },
  output: {
    filename: fileName('js', 'js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(),
  module: {
    rules: [{
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.(scss|sass)$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico|gif)$/,
        loader: 'file-loader',
        options: {
          name: isDev ? '[path][name].[ext]' : '[path][name].[hash:8].[ext]',
          publicPath: '../',
        }
      },
      {
        test: /\.(otf|ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: isDev ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:8].[ext]',
          publicPath: '../',
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  }
};