import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  
  hostname: "20231-ifba-saj-ads-tawii.github.io/blog-material-aula/",

  author: {
    name: "Leandro Souza",
    url: "https://github.com/leandro-costa",
  },

  lastUpdated: false,
  contributors: false,

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "20231-ifba-saj-ads-tawii/blog-material-aula",

  docsBranch: 'master',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Material de aula IFBA SAJ",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  

  blog: {
    description: "Professor EBTT",
    intro: "/intro.html",
    roundAvatar:true,
    avatar: "avatar.jpg",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa",
    },
  },

  metaLocales: {
    toc: "Nesta Página",
  },

  plugins: {

    pwa:true,

    blog: {
      // only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      excerptLength: 1,
    },


    mdEnhance: {
      include: true,
      footnote: true,
      container: true,
      tabs: true,
      mathjax: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
  
});
