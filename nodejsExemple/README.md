Web APP
===================

#### Para desenvolver, siga as seguintes etapas: ####
* Instale o [Git](https://git-scm.com/downloads) para sua plataforma.
* Instale o [Node.js](https://nodejs.org/en/download/) na versão do seu sistema atual.
* Clone o repositório para uma pasta local (para os inexperientes, recomendo o uso de um client, como o [GitKraken](http://www.gitkraken.com/download)).
* Após receber todo o repositório, abra a pasta do projeto em um terminal e execute o comando "_npm install_". (Para usuários Windows, entrem na pasta do projeto e pressionem shift+botão direito. No menu de contexto, a opção de abrir a pasta via terminal aparecerá.).
* Agora, você possui todas as dependências instaladas e está quase pronto para desenvolver. Com o terminal aberto na pasta do projeto, execute o comando "_npm install -g gulp_". Usamos o Gulp para automatizar alguns processos. Nota: a instalação do Gulp em Mac precisa de autorização de super usuário para funcionar corretamente.
* Ok, agora sim, você está pronto! Execute "_npm run build_" ou "_gulp build_" para compilar os arquivos necessários para execução.
* Após finalizar a etapa anterior, execute o comando "_npm run dev_" para iniciar o servidor em modo de desenvolvimento. Se você estiver usando alguma distribuição Linux, não esqueça que para qualquer porta abaixo de 1024 você precisa ser um super usuário para executar (_sudo npm run dev_) ou redirecionar uma outra porta para a mesma.
* Todas as mudanças feitas na parte _public_ poderão então ser efetuadas sem reinicializar o servidor, e a automação do Gulp deve atualizar os arquivos CSS e JS inseridos.
* As variáveis do ambiente devem ficar no arquivo .env, no root do repositório. Lá está definida em qual porta o servidor funciona, e outras variáveis que afetam o comportamento do servidor.


#### Instruções para uso do Gulp
* "_npm run build_" força a criação dos arquivos para public/dist.
* "_gulp clean_" limpa os arquivos dessa pasta.
* Caso alterar a PORT do .env, alterar a variável port do gulpfile para a mesma.
