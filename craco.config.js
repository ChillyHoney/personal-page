const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#fff000', // primary color for all components
              'link-color': '#fff000', // link color
              'font-size-base': '14px', // major text font size
              'heading-color': '#e0e0e0', // heading text color
              // 'heading-color': '#3b3b3b', // heading text color
              'border-color-base': '#d9d9d9', // major border color
              // 'text-color': '#2b2b2b',
              'text-color-dark': '#d9d9d9',
              'text-color-secondary-dark': '#727E89', //color of unselected options in menu
              // 'text-color-inverse': '#fad',
              'menu-dark-selected-item-icon-color': '#2b2b2b', //three from it to down is for selected items
              'menu-dark-selected-item-text-color': '#2b2b2b',
              'segmented-selected-bg': '#2b2b2b',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
