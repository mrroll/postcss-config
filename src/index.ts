const config = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'custom-properties': false,
      },
    },
    'postcss-discard-comments': { removeAll: true },
    rfs: {},
  },
};

export = config;
