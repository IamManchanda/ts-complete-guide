SystemJS.config({
  baseURL: '/',
  packages: {
      '/': {
          defaultExtension: 'js',
      },
  },
});

SystemJS.import('js/app.js');
