SystemJS.config({
  baseURL: '/',
  packages: {
      '/': {
          defaultExtension: 'js',
      },
  },
});

/* SystemJS.import('js/app.js'); */
SystemJS.import('js/challenge.js');
