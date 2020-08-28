![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# SXA Umbrella Web Components

This is a sample project showcasing how to write and consume web components created with Stencil.

One of the components is an Address Card component:

- Written in a version using attributes and a version using slots (for SEO)
- Consumed in ReactJS (see )
- Consumed in Vue
- Showcased in Storybook

See https://mango-river-020e4d803.azurestaticapps.net/ for the above samples.

The components are published to NPM as well as the package [sxa-umbrella-webcomponents](https://www.npmjs.com/package/sxa-umbrella-webcomponents).

Components can be loaded directly through https://unpkg.com by adding the following lines to the head section of your HTML page:

```html
<link rel="stylesheet" href="https://unpkg.com/sxa-umbrella-webcomponents@0.0.1/dist/sxa-umbrella-webcomponents/sxa-umbrella-webcomponents.css" />
<script type="module" src="https://unpkg.com/sxa-umbrella-webcomponents@0.0.1/dist/sxa-umbrella-webcomponents/sxa-umbrella-webcomponents.esm.js"></script>
<script nomodule src="https://unpkg.com/sxa-umbrella-webcomponents@0.0.1/dist/sxa-umbrella-webcomponents/sxa-umbrella-webcomponents.js"></script>
```

Replace `@0.0.1` with the latest version.

## How to use
See `package.json` for the different script commands to build the different versions.

## Blog posts

[Web components the silver bullet for Sitecore SXA?](https://www.linkedin.com/pulse/web-components-silver-bullet-sitecore-sxa-serge-van-den-oever/)