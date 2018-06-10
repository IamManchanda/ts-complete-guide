SystemJS.config({
  map: {
    '$': 'node_modules/jquery/dist/jquery.min.js',
  },
  baseURL: '/',
  packages: {
      '/': {
          defaultExtension: 'js',
      },
  },
});

SystemJS.import('js/app.js');
