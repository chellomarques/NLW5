import express, { response } from "express"

const app = express();
/**
 * POST
 * PUT
 * GET
 * DELETE
 * PATCH
 */

app.get("/", (request, response ) => {
  return response.json({
    message: "Olá, você está no mer server!",
  })
})

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!",})
})

app.listen(3333, () => console.log('Server is running on port 3333'))
