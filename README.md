## Getting Started

# Executando o Front End

Para executar o Front End, siga estes passos:

1 -Navegue até o diretório Front/todo-task-board.
2 - Instale as dependências usando um dos seguintes comandos:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3 - Após a instalação ser concluída, execute o servidor de desenvolvimento com um dos seguintes comandos:

```bash
npm run dev
# ou
yarn run dev
# ou
pnpm dev
```

4 - Abra seu navegador web e acesse http://localhost:3001 para ver a aplicação.

# Executar Migrations

1 - Certifique-se de que você criou um banco de dados chamado "TaskBoardDb".
2 - Defina o projeto "Infrastructure" como o projeto padrão no terminal ou na configuração de "Package source", e também defina-o como projeto de inicialização (Start Up Project).
3 - Execute o seguinte comando para executar as migrações:

```bash
Update-Database
```

# Executar Back
Para executar o Back End, siga estes passos:

1 - Defina o projeto "API" como projeto principal.
2 - Execute o projeto para iniciar o Back End.

Seguindo esses passos, tanto o Front End quanto o Back End devem estar sendo executados com sucesso.
