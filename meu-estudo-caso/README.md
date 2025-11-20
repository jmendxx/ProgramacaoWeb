# Estudo de Caso — Listagem de Alunos (Web + Mobile)

## 📘 Descrição

Aplicação exemplo com duas partes:
- **Web:** React + Vite com navegação, consumo de API e testes automatizados (Vitest + React Testing Library).

- **Mobile:** React Native + Expo com navegação (React Navigation) e consumo da mesma API.

A aplicação lista alunos via API REST e mostra detalhes de cada aluno.

## 📁 Estrutura do Repositório

```bash
/meu-estudo-caso
├── web/     # Projeto React (Vite)
└── mobile/  # Projeto Expo (React Native)
```

## 🌐 API Utilizada

- API de referência (Swagger): `https://proweb.leoproti.com.br/swagger-ui/index.html`
- Endpoints esperados:
  - `GET /alunos` — Lista todos os alunos
  - `GET /alunos/{id}` — Detalhes de um aluno específico

> A URL base da API pode ser configurada por variável de ambiente.

---

## 🖥️ Web — Instalação e Execução (React + Vite)

Acesse a pasta`web/`:

```bash
cd web
npm install
```

Configure a variável de ambiente (opcional):

Crie um arquivo `.env:`

VITE_API_BASE_URL=https://proweb.leoproti.com.br

Rodar em modo desenvolvimento:

```bash
npm run dev
```

Build para produção:

```bash
npm run build
```

Preview local do build:

```bash
npm run preview
```

## 🧪 Testes (Vitest)

Rodar testes:

```bash
npm run test
```

## 📱 Mobile — Instalação e Execução (Expo)

Entre na pasta `mobile/`:

```bash
cd mobile
npm install
```

Iniciar o Expo:

```bash
npx expo start
```

Abra o projeto pelo emulador ou pelo aplicativo Expo Go no celular.

Para alterar a URL da API:

Editar `mobile/src/api/alunosService.js` (variável BASE_URL),
ou
Configurar via `app.config.js`.

## 🔀 Rotas Implementadas

### Web
`/` — Lista de alunos (`ListaAlunos`)
`/alunos/:id` — Detalhes do aluno (DetalhesAlunos)

### Mobile
Alunos — Lista de alunos
Detalhes — Tela de detalhes (recebe `id` via params)

## 🚀 Deploy da versão Web (Vercel)

Crie uma conta em Vercel.
Conecte seu repositório GitHub.

Configure:
Root Directory: `web/`
Build command: `npm run build` (ou `vite build`)
Output directory: `dist`
Clique em Deploy.

A Vercel fornecerá uma URL pública automaticamente.

## 📚 Créditos / Referências

React — https://react.dev/  
Vite — https://vitejs.dev/  
React Router — https://reactrouter.com/  
Axios — https://axios-http.com/  
React Bootstrap — https://react-bootstrap.github.io/  
Vitest — https://vitest.dev/  
React Testing Library — https://testing-library.com/  
Expo — https://expo.dev/  
React Native — https://reactnative.dev/

## 🌎 Link para o Site Publicado

👉 [Acesse o site aqui](https://programacao-web-gilt.vercel.app/)

## 👩‍💻 Autoria

Desenvolvido por **Juliana Mendes**.
Disciplina: **Programação Web – Newton Paiva**.
