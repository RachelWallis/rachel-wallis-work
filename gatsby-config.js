require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Rachel Wallis",
    description: "Personal Site of Rachel Wallis, Product Designer",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          display: "standalone",
          icon: "src/images/icon.png", 
      }
    },
  ],
};
