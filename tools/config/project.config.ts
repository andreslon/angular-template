import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      /* Select a pre-built Material theme */
      { src: '@angular/material/prebuilt-themes/indigo-pink.css', inject: true },
      /* Polyfill for unsupported browsers */
      { src: 'web-animations-js/web-animations.min.js', inject: 'shims' },
      /* For some gestures */
      { src: 'hammerjs/hammer.js', inject: 'libs' },
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    
    const additionalPackages: ExtendPackages[] = [
      {
        name: '@angular/material',
        path: 'node_modules/@angular/material/bundles/material.umd.js'
      },
      {
        name: '@angular/material/core',
        path: 'node_modules/@angular/material/bundles/material-core.umd.js'
      },

      {
        name: '@angular/material/autocomplete',
        path: 'node_modules/@angular/material/bundles/material-autocomplete.umd.js'
      },
      {
        name: '@angular/material/badge',
        path: 'node_modules/@angular/material/bundles/material-badge.umd.js'
      },
      ​
      {
        name: '@angular/material/bottom-sheet',
        path: 'node_modules/@angular/material/bundles/material-bottom-sheet.umd.js'
      },​
      {
        name: '@angular/material/button-toggle',
        path: 'node_modules/@angular/material/bundles/material-button-toggle.umd.js'
      },​
      {
        name: '@angular/material/button',
        path: 'node_modules/@angular/material/bundles/material-button.umd.js'
      },​
      {
        name: '@angular/material/card',
        path: 'node_modules/@angular/material/bundles/material-card.umd.js'
      },​
      {
        name: '@angular/material/checkbox',
        path: 'node_modules/@angular/material/bundles/material-checkbox.umd.js'
      },​
      {
        name: '@angular/material/chips',
        path: 'node_modules/@angular/material/bundles/material-chips.umd.js'
      },​
      {
        name: '@angular/material/core',
        path: 'node_modules/@angular/material/bundles/material-core.umd.js'
      },​
      {
        name: '@angular/material/datepicker',
        path: 'node_modules/@angular/material/bundles/material-datepicker.umd.js'
      },​
      {
        name: '@angular/material/dialog',
        path: 'node_modules/@angular/material/bundles/material-dialog.umd.js'
      },​
      {
        name: '@angular/material/divider',
        path: 'node_modules/@angular/material/bundles/material-divider.umd.js'
      },​
      {
        name: '@angular/material/expansion',
        path: 'node_modules/@angular/material/bundles/material-expansion.umd.js'
      },​
      {
        name: '@angular/material/form-field',
        path: 'node_modules/@angular/material/bundles/material-form-field.umd.js'
      },​
      {
        name: '@angular/material/grid-list',
        path: 'node_modules/@angular/material/bundles/material-grid-list.umd.js'
      },​
      {
        name: '@angular/material/icon',
        path: 'node_modules/@angular/material/bundles/material-icon.umd.js'
      },​
      {
        name: '@angular/material/input',
        path: 'node_modules/@angular/material/bundles/material-input.umd.js'
      },​
      {
        name: '@angular/material/list',
        path: 'node_modules/@angular/material/bundles/material-list.umd.js'
      },​
      {
        name: '@angular/material/menu',
        path: 'node_modules/@angular/material/bundles/material-menu.umd.js'
      },​
      {
        name: '@angular/material/paginator',
        path: 'node_modules/@angular/material/bundles/material-paginator.umd.js'
      },​
      {
        name: '@angular/material/progress-bar',
        path: 'node_modules/@angular/material/bundles/material-progress-bar.umd.js'
      },​
      {
        name: '@angular/material/progress-spinner',
        path: 'node_modules/@angular/material/bundles/material-progress-spinner.umd.js'
      },​
      {
        name: '@angular/material/radio',
        path: 'node_modules/@angular/material/bundles/material-radio.umd.js'
      },​
      {
        name: '@angular/material/select',
        path: 'node_modules/@angular/material/bundles/material-select.umd.js'
      },​
      {
        name: '@angular/material/sidenav',
        path: 'node_modules/@angular/material/bundles/material-sidenav.umd.js'
      },​
      {
        name: '@angular/material/slide-toggle',
        path: 'node_modules/@angular/material/bundles/material-slide-toggle.umd.js'
      },​
      {
        name: '@angular/material/slider',
        path: 'node_modules/@angular/material/bundles/material-slider.umd.js'
      },
      {
        name: '@angular/material/snack-bar',
        path: 'node_modules/@angular/material/bundles/material-snack-bar.umd.js'
      },
      {
        name: '@angular/material/sort',
        path: 'node_modules/@angular/material/bundles/material-sort.umd.js'
      },
      {
        name: '@angular/material/stepper',
        path: 'node_modules/@angular/material/bundles/material-stepper.umd.js'
      },
      {
        name: '@angular/material/table',
        path: 'node_modules/@angular/material/bundles/material-table.umd.js'
      },
      {
        name: '@angular/material/tabs',
        path: 'node_modules/@angular/material/bundles/material-tabs.umd.js'
      },
      {
        name: '@angular/material/toolbar',
        path: 'node_modules/@angular/material/bundles/material-toolbar.umd.js'
      },
      {
        name: '@angular/material/tooltip',
        path: 'node_modules/@angular/material/bundles/material-tooltip.umd.js'
      },
      {
        name: '@angular/material/tree',
        path: 'node_modules/@angular/material/bundles/material-tree.umd.js'
      },
      {
        name: '@angular/cdk',
        path: 'node_modules/@angular/cdk/bundles/cdk.umd.js'
      },
      {
        name: '@angular/cdk/a11y',
        path: 'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js'
      },
      {
        name: '@angular/cdk/accordion',
        path: 'node_modules/@angular/cdk/bundles/cdk-accordion.umd.js'
      },
      {
        name: '@angular/cdk/bidi',
        path: 'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js'
      },
      {
        name: '@angular/cdk/coercion',
        path: 'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js'
      },
      {
        name: '@angular/cdk/collections',
        path: 'node_modules/@angular/cdk/bundles/cdk-collections.umd.js'
      },
      {
        name: '@angular/cdk/keycodes',
        path: 'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js'
      },
      {
        name: '@angular/cdk/layout',
        path: 'node_modules/@angular/cdk/bundles/cdk-layout.umd.js'
      },
      {
        name: '@angular/cdk/observers',
        path: 'node_modules/@angular/cdk/bundles/cdk-observers.umd.js'
      },
      {
        name: '@angular/cdk/overlay',
        path: 'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js'
      },
      {
        name: '@angular/cdk/platform',
        path: 'node_modules/@angular/cdk/bundles/cdk-platform.umd.js'
      },
      {
        name: '@angular/cdk/portal',
        path: 'node_modules/@angular/cdk/bundles/cdk-portal.umd.js'
      },
      {
        name: '@angular/cdk/scrolling',
        path: 'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js'
      },
      {
        name: '@angular/cdk/stepper',
        path: 'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js'
      },
      {
        name: '@angular/cdk/table',
        path: 'node_modules/@angular/cdk/bundles/cdk-table.umd.js'
      },
      {
        name: '@angular/cdk/text-field',
        path: 'node_modules/@angular/cdk/bundles/cdk-text-field.umd.js'
      },
      {
        name: '@angular/cdk/tree',
        path: 'node_modules/@angular/cdk/bundles/cdk-tree.umd.js'
      }
    ];

    this.addPackagesBundles(additionalPackages);



    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
