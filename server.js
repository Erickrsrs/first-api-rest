import app from "./src/app.js";
//ou vai ser a porta do servidor requisitado ou uma padrão
//                   porta em produção ou local definida
const port = process.env.PORT || 3000;

//qual porta o servidor vai escutar
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
