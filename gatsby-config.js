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
      
      
    

      
      
      display: "browser",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
      
    },
  }
  ],
};
