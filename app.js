const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const findTeam = (content) => {
  content = new RegExp(/team.*/i).exec(content);
  if (!content) {
    return "NOT FOUND";
  }

  const foundTeam = content[0]
    .replace(/team|name|<@*#*!*&*\d+>|[^\w\s]/gi, "")
    .trim();

  return foundTeam ? `Team ${foundTeam}` : "NOT FOUND";
};

app.get("/", (req, res) => {
  res.send("Running");
});

app.post("/slotlist", (req, res) => {
  const slotlist = [];
  if (!req.body?.content_array || !Array.isArray(req.body?.content_array)) {
    return res.status(404).send({ message: "Empty Body" });
  }
  req.body.content_array.forEach((content) => {
    slotlist.push(findTeam(content));
  });

  res.json(slotlist);
});

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(process.env.PORT || 3500, () => {
  "Server is running";
});
