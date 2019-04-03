const config = {
  port: 8180,
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = '';
} else {
  config.cdn = 'https://nknwallet.io/wallet';
}

module.exports = config;
