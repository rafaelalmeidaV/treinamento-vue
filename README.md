# Dashboard - Treinamento Vue.js

Este projeto faz parte do treinamento Vue.js oferecido pela Vue.js Brasil, focado em criar uma aplicação dashboard moderna e funcional utilizando as melhores práticas e ferramentas do ecossistema Vue.

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Vue.js 3](https://vuejs.org/) - Framework JavaScript progressivo
- [Vue Router 4](https://router.vuejs.org/) - Roteamento oficial do Vue.js
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Jest](https://jestjs.io/) - Framework de testes
- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [ESLint](https://eslint.org/) - Linter para JavaScript/Vue.js
- [Animate.css](https://animate.style/) - Biblioteca de animações CSS

## 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório
```bash
git clone [url-do-repositório]
```

2. Entre no diretório do projeto
```bash
cd dashboard
```

3. Instale as dependências
```bash
npm install
```

## 🚀 Executando o projeto

### Ambiente de desenvolvimento
```bash
npm run serve
```

### Compilar e minificar para produção
```bash
npm run build
```

### Executar testes unitários
```bash
npm run test:unit
```

### Executar testes end-to-end
```bash
npm run test:e2e
```

### Lints e correções de arquivos
```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
dashboard/
├── public/              # Arquivos públicos estáticos
├── src/                 # Código fonte
│   ├── assets/         # Recursos (imagens, estilos, etc)
│   ├── components/     # Componentes Vue
│   ├── router/         # Configurações de rotas
│   ├── views/          # Componentes de página/rota
│   ├── App.vue         # Componente raiz
│   └── main.js         # Ponto de entrada da aplicação
├── tests/              # Testes
│   ├── e2e/           # Testes end-to-end
│   └── unit/          # Testes unitários
└── package.json        # Dependências e scripts
```

## 🧪 Testes

O projeto utiliza Jest para testes unitários e Cypress para testes end-to-end.

### Executando testes unitários:
```bash
npm run test:unit
```

### Executando testes e2e:
```bash
npm run test:e2e
```

## 🎨 Estilização

O projeto utiliza Tailwind CSS para estilização. Os estilos podem ser encontrados em:
- `src/assets/tailwind.css` - Arquivo principal do Tailwind
- Componentes individuais usando classes utilitárias do Tailwind

## 📚 Documentação Adicional

- [Documentação Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Guia Tailwind CSS](https://tailwindcss.com/docs)
- [Vue Test Utils](https://test-utils.vuejs.org/)

## ✨ Agradecimentos

- Vue.js Brasil pela iniciativa do treinamento
- Todos os instrutores e mentores envolvidos
- Comunidade Vue.js brasileira

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
