import LPpc from "./../assets/LPpc.png";
import LPsp from "./../assets/LPsp.png";
import pokepc from "./../assets/pokepc.png";
import pokesp from "./../assets/poketb.png";
import blogpc from "./../assets/blogpc.png";
import blogsp from "./../assets/blogsp.png";
import summersp from "./../assets/summersp.png";
import summerpc from "./../assets/summerpc.png";
import skills from "./skills";

const icon = (name) => skills.find((s) => s.label === name)?.src;

const works = [
  {
    label: "架空のクラフトビールLP",
    text: [
      "兵庫、神戸のクラフトビールの架空LP。",
      "figmaでデザインを作成して、HTML、Sass、JavaScriptで作成。",
      "ファイル管理はGitHubで行いました。",
    ],
    url: "https://cancion97.github.io/2025_10_fictional_LP/",
    src: LPpc,
    srcs: LPsp,
    tool: [
      icon("HTML"),
      icon("sass"),
      icon("JavaScript"),
      icon("Figma"),
      icon("Github"),
    ],
    style: "10px solid #EEB449",
  },
  {
    label: "今日のラッキーポケモンアプリ",
    text: [
      "POKE APIを使った今日のラッキーポケモンを占うWEBアプリ。",
      "figmaでデザインを作成して、HTML、Sass、JavaScriptで作成。",
      "ファイル管理はGitHubで行いました。",
    ],
    url: "https://cancion97.github.io/pokeapi_luckypokemon/",
    src: pokepc,
    srcs: pokesp,
    tool: [
      icon("HTML"),
      icon("sass"),
      icon("JavaScript"),
      icon("Figma"),
      icon("Github"),
    ],
    style: "10px solid #41A1E9",
  },
  {
    label: "Reactで作ったブログサイト",
    text: [
      "授業で作ったブログサイトです。",
      "Figmaで作られたデザインをもとに、Reactを使って作成しました。",
      "ファイル管理はGithubで行いました。",
    ],
    url: "https://cancion97.github.io/reactBlogSite/",
    src: blogpc,
    srcs: blogsp,
    tool: [
      icon("HTML"),
      icon("css"),
      icon("JavaScript"),
      icon("React"),
      icon("Figma"),
      icon("Github"),
      icon("vite"),
    ],
    style: "10px solid #E532D3",
  },
  {
    label: "日記サイト",
    text: [
      "訓練が始まって2ヶ月目に作った夏休みの課題の日記サイトです。",
      "Figmaでデザインを作ってHTML、sass、少しだけJavaScriptを使って作りました。",
      "ファイル管理はGithubで行いました。",
    ],
    url: "https://cancion97.github.io/summer_vacation/",
    src: summerpc,
    srcs: summersp,
    tool: [
      icon("HTML"),
      icon("sass"),
      icon("JavaScript"),
      icon("Figma"),
      icon("Github"),
    ],
    style: "10px solid #19bbd4ff",
  },
];

export default works;
