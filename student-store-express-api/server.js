const app = require("./routes/app")

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})
