const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { "@primary-color": "#08adad" },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
