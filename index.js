require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
                    "login": "adityamathur5836",
                    "id": 178011420,
                    "node_id": "U_kgDOCpw9HA",
                    "avatar_url": "https://avatars.githubusercontent.com/u/178011420?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/adityamathur5836",
                    "html_url": "https://github.com/adityamathur5836",
                    "followers_url": "https://api.github.com/users/adityamathur5836/followers",
                    "following_url": "https://api.github.com/users/adityamathur5836/following{/other_user}",
                    "gists_url": "https://api.github.com/users/adityamathur5836/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/adityamathur5836/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/adityamathur5836/subscriptions",
                    "organizations_url": "https://api.github.com/users/adityamathur5836/orgs",
                    "repos_url": "https://api.github.com/users/adityamathur5836/repos",
                    "events_url": "https://api.github.com/users/adityamathur5836/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/adityamathur5836/received_events",
                    "type": "User",
                    "user_view_type": "public",
                    "site_admin": false,
                    "name": "Aditya mathur",
                    "company": null,
                    "blog": "",
                    "location": null,
                    "email": null,
                    "hireable": null,
                    "bio": null,
                    "twitter_username": null,
                    "public_repos": 15,
                    "public_gists": 0,
                    "followers": 0,
                    "following": 0,
                    "created_at": "2024-08-10T09:34:40Z",
                    "updated_at": "2025-05-13T11:03:32Z"
                  }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("Hello Twitter!");
})

app.get("/login", (req, res) => {
    res.send("<h1>Please Login</h1>")
})
app.get("/youtube", (req, res) => {
    res.send("<h1>Youtube</h1>")
})

app.get("/github", (req, res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
