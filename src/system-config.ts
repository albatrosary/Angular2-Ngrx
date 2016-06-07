declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'node_modules/@angular',
    '@ngrx': 'node_modules/@ngrx',
    'rxjs': 'node_modules/rxjs',
    'scripts/main': 'scripts/main.js'
  },
  packages: {
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },
    '@ngrx/core': {
      main: 'index',
      format: 'cjs'
    },
    '@ngrx/store': {
      main: 'index',
      format: 'cjs'
    },

    // Thirdparty barrels.
    'rxjs': { main: 'Rx' },

    // App specific barrels.
    'actions': { main: 'index' },
    'components': { main: 'index' },
    'services': { main: 'index' },
  }
});
