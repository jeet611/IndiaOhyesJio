module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "IndiaOhyes",
  },
  plugins: [ 
     {
    resolve: 'gatsby-plugin-sass',
    options: {
      postCssPlugins: [
        require('tailwindcss'),
        require('./tailwind.config.js')
      ]
    },
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "IndiaOhyes",
      short_name: "GatsbyJS",
      start_url: "/",
      background_color: "#ff6f00",
      theme_color: "#ff6f00",
      "fullscreen": true,
      "type": "privileged",
       "cursor": true,

      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "browser",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    },
  }
  ],
};
