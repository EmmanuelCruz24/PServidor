// Practica: Mi Primer Servidor
// Alumno: Emmanuel Cruz
// Matricula: 357615
// 1. Servidor Simple
// Estrutuctura de mi servidor simple "Hola Mundo" usando HTTP

// Inicio del Servidor Simple

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

Fin del Servidor Simple */

// Inicio del Servidor Sincronimo

/*
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const data = fs.readFileSync('archivo.txt', 'utf8'); // Nota por parte mia para no Lectura síncrona
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

*/

// Inicio del Servidor Asincronimo


const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('archivo.txt', 'utf8', (err, data) => {  // Nota por parte mia para no olvidar: Lectura asíncrona
    if (err) {
      res.statusCode = 500;
      res.end('Error al leer el archivo');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});


