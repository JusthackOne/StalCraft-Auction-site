const ngrok = require("ngrok");
const http = require("http");

const PORT = 3000; // Порт вашего локального сервера React

const server = http.createServer((req, res) => {
  // Здесь нужно добавить логику для обработки запросов на ваш локальный сервер React
});

server.listen(PORT, async () => {
  const url = await ngrok.connect({
    proto: "http",
    addr: PORT,
    authtoken: "2e03QjY3sJmxNwtLNUEx3Ucr0OO_5RQDvqDZTfs2mzyBM7XG3", // Замените YOUR_NGROK_AUTH_TOKEN на ваш авторизационный токен
  });

  console.log(`Ngrok tunnel is active at ${url}`);
});
