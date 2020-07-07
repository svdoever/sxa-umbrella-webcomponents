import { readFileSync } from 'fs';
import { Config } from "@stencil/core";
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export const config: Config = {
  namespace: "sxa-umbrella-webcomponents",
  globalStyle: 'src/global/global.css'
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: "images"
        },
        {
          src: "*.html"
        }
      ],
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer()
      ]
    })
  ],
  // Install openssl: chocolatey install openssl
  // Use "generate-cert-and-key.bat" to generate the cert.pem and key.pem for localhost
  // Uncomment lines below for https access
  // devServer: {
  //   reloadStrategy: 'pageReload',
  //   port: 3333,
  //   https: {
  //     cert: readFileSync('cert.pem', 'utf8'),
  //     key: readFileSync('key.pem', 'utf8')
  //   }
  // }
};
