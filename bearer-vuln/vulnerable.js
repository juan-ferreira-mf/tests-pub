// vulnerable.js

// 🔴 Hardcoded secrets
const jwtSecret = 'super-secret-jwt-key-123';
const apiKey = 'sk_live_51H8xxxAPIKEY';

// 🔴 Uso perigoso de eval
const userInput = "2 + 2";
console.log(eval(userInput));

// 🔴 Exposição de dados sensíveis em logs
const userPassword = 'mypassword123';
console.log('Senha recebida do usuário:', userPassword);

// 🔴 Armazenamento inseguro (sem criptografia)
const fs = require('fs');
const db = [];

function saveUserData(user) {
  db.push(user); // 🔴 Nenhuma proteção
  fs.writeFileSync('users.txt', JSON.stringify(db));
}

// 🔴 Acesso inseguro a cookies
function getSession(req) {
  return req.headers.cookie; // Pode conter JWT/token direto
}

// 🔴 Uso de HTTP sem TLS (simulado)
fetch('http://api.insecure-service.local/data')
  .then(res => res.json())
  .then(data => console.log(data));

// 🔴 Serialização insegura
const obj = { isAdmin: true };
const serialized = JSON.stringify(obj);
eval(`const user = ${serialized}`);

// 🔴 Senha hardcoded
const config = {
  dbPassword: 'mongo123'
};

// 🔴 Chave SSH hardcoded
const sshKey = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCvSvnz...
-----END RSA PRIVATE KEY-----`;

module.exports = {
  saveUserData,
  getSession,
};
