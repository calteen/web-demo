const app = require("./index");


const PORT = process.env.PORT || 500;

app.listen(PORT, async () => {

  console.log("listening to port", PORT);
});
