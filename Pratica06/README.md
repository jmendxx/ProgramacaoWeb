# Prática 06 - Sistema CRUD de Alunos

## 🎯 Objetivo

Desenvolver uma aplicação web completa capaz de realizar operações CRUD (Create, Read, Update, Delete) para gerenciamento de **alunos**, utilizando uma API REST externa.

A aplicação demonstra:
- Consumo de APIs REST
- Manipulação do DOM
- Programação assíncrona (async/await)
- Separação entre páginas (lista e formulário)
- Boas práticas de front-end

---
## 📋 Requisitos Implementados

### Funcionalidades CRUD
- ✅ **CREATE:** Cadastrar novos alunos  
- ✅ **READ:** Listar todos os alunos  
- ✅ **UPDATE:** Editar alunos existentes  
- ✅ **DELETE:** Excluir alunos  

### Estrutura de Dados (Aluno)

```json
{
  "id": 0,
  "nome": "string",
  "turma": "string",
  "curso": "string",
  "matricula": 0
}
```
---

## 🖥️ Interface do Usuário

A interface foi desenvolvida para ser simples, intuitiva e responsiva. Ela conta com:

- **Formulário** para cadastro e edição de alunos  
- **Tabela dinâmica** exibindo todos os alunos cadastrados  
- **Botões de ação** (Editar / Excluir) integrados à API  
- **Indicador de carregamento (loading)** para ações assíncronas  
- **Mensagens de feedback** (sucesso/erro) exibidas automaticamente

---
## 🔗 API Utilizada

### Base URL:
https://proweb.leoproti.com.br/alunos

### ✔ GET /alunos  
Retorna todos os alunos.

### ✔ POST /alunos  
Cria um novo aluno.

**Body (JSON):**
```json
{
  "nome": "string",
  "turma": "string",
  "curso": "string",
  "matricula": 0
}
```

### ✔ DELETE /alunos/{id} 
Exclui um aluno pelo ID.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação
- **CSS3 + Bootstrap 5:** Estilização e responsividade
- **JavaScript (ES6+):** Lógica do sistema
- **Fetch API:** Requisições HTTP
- **Async/Await:** Controle assíncrono
- **Bootstrap CDN:** Interface visual pronta

---

## 📂 Estrutura do Projeto

```bash
Pratica06/
├── index.html          # Página principal (lista de alunos)
├── form.html           # Página de criação/edição
├── js/
│   ├── script.js       # Lógica: listagem e exclusão
│   └── form.js         # Lógica: criação e edição
└── README.md           # Documentação
```

---

## ⚡ Atalhos para Seleção de Elementos

Para facilitar a escrita e reduzir repetição no código, foram utilizados atalhos para seleção de elementos do DOM:

```js
// Seleciona o primeiro elemento que corresponde ao seletor
const $ = s => document.querySelector(s);

// Seleciona todos os elementos que correspondem ao seletor
const $$ = s => document.querySelectorAll(s);
```

---

## 🚀 Como Usar

### 1️⃣ Cadastrar Aluno
- Preencha os campos **Nome**, **Turma**, **Curso** e **Matrícula**.
- Clique em **Adicionar Aluno**.
- O aluno será salvo e exibido automaticamente na lista.

### 2️⃣ Editar Aluno
- Clique no botão **Editar** na linha do aluno desejado.
- Os dados serão carregados no formulário.
- Realize as alterações necessárias.
- Clique em **Atualizar Aluno**.

### 3️⃣ Excluir Aluno
- Clique no botão **Excluir**.
- Confirme a ação na janela de confirmação.
- O aluno será removido da lista.

---

## 🔧 Funcionalidades Técnicas

### ✔ Tratamento de Erros
- Tratamento de falhas na conexão com a API.
- Detecção de API offline ou respostas inválidas.
- Exibição de mensagens claras e objetivas ao usuário.

### ✔ Interface Responsiva
- Layout totalmente adaptado para dispositivos móveis.
- Tabela com **scroll horizontal** para telas pequenas.
- Componentes otimizados com **Bootstrap 5**.

### ✔ UX/UI
- Indicadores de carregamento durante requisições.
- Mensagens de sucesso e erro exibidas de forma temporária.
- Confirmação antes de excluir um aluno, evitando remoções acidentais.

---

## 🧪 Exemplos de Requisições cURL

### 📌 Listar alunos
```bash
curl -i https://proweb.leoproti.com.br/alunos
```

### 📌 Criar aluno
```bash
curl -i -X POST https://proweb.leoproti.com.br/alunos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Aluno Teste","turma":"A1","curso":"ADS","matricula":123}'
```

### 📌 Atualizar aluno
```bash
curl -i -X PUT https://proweb.leoproti.com.br/alunos/10 \
  -H "Content-Type: application/json" \
  -d '{"id":10,"nome":"Atualizado","turma":"B2","curso":"DSM","matricula":456}'
```

### 📌 Excluir aluno
```bash
curl -i -X DELETE https://proweb.leoproti.com.br/alunos/10
```
---
## 🖥️ Testando Localmente (evitar CORS)

### Servidor local recomendado: 

**PowerShell:** npx http-server . -p 3000 --cors 

**Acesse:** http://127.0.0.1:3000/

---
## 🌎 Link para o Site Publicado

👉 [Acesse o site aqui](pratica06-taupe.vercel.app)

---

## 👩‍💻 Autoria

Desenvolvido por **Juliana Mendes**.
Disciplina: **Programação Web – Newton Paiva**.
