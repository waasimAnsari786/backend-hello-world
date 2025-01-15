const express = require("express");
require("dotenv").config();
const app = express();

const gitHubData = {
  login: "waasimAnsari786",
  id: 161191967,
  node_id: "U_kgDOCZuYHw",
  avatar_url: "https://avatars.githubusercontent.com/u/161191967?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/waasimAnsari786",
  html_url: "https://github.com/waasimAnsari786",
  followers_url: "https://api.github.com/users/waasimAnsari786/followers",
  following_url:
    "https://api.github.com/users/waasimAnsari786/following{/other_user}",
  gists_url: "https://api.github.com/users/waasimAnsari786/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/waasimAnsari786/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/waasimAnsari786/subscriptions",
  organizations_url: "https://api.github.com/users/waasimAnsari786/orgs",
  repos_url: "https://api.github.com/users/waasimAnsari786/repos",
  events_url: "https://api.github.com/users/waasimAnsari786/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/waasimAnsari786/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Waasim Ansari",
  company: null,
  blog: "https://waasim-portfolio-2.netlify.app/",
  location: "Korangi no 5, Karachi.",
  email: null,
  hireable: null,
  bio: "Pursuing in MERN Stack. HTML | CSS | JavaScript | Bootstrap | Tailwind | React | ReduxToolkit",
  twitter_username: null,
  public_repos: 47,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2024-02-25T06:40:38Z",
  updated_at: "2025-01-15T04:09:21Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/contact", (req, res) => {
  res.send("<h1> This is contact page</h1>");
});

app.get("/services", (req, res) => {
  res.send(console.log(["This is services page"]));
});

app.get("/gitHub", (req, res) => {
  res.json(gitHubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
