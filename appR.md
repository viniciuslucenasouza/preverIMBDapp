Aplicativo em R
================

Inicio
------

Esse Markdown é uma continuação do trabalho Regressao-Linear-para-prever-notas-IMbd-programa-o-em-R que tem por finalidade desenvolver um webApp usando da função de predição de notas.

Caso não tenha visto [Acesse AQUI](http://rpubs.com/viniciuslucenasouza/316278) a publicação no Rpubs

Codigo em R
-----------

Os arquivos estão localizados no [repositório github](https://github.com/viniciuslucenasouza/preverIMBDapp) na pasta Rapp.

Para gerar o nosso aplicativos precisamos de dois passos:

### Instalando o Pacote "Plumber":

``` r
library("plumber")
```

Feito isso, precisamos criar nosso aplicativo. Não entrarei em detalhes para explicar as funções usadas, mas basicamente usaremos POST na rota criada com nosso plumber.

Criemaos um arquivo chamado `meuscript.R` com uma função criada a partir do nosso modelo de regressão linear vista no código em R:

``` r
#* @post /prever
funcao_que_preve <- function(orcamento, ano) {
  d <- data.frame(budget = as.numeric(orcamento), year = as.numeric(ano))
  predict(modelo, newdata = d)
}
```

Note que precisamos rodar o `modelo` da função `lm()` No arquivo `primeiroAPI.R` temos:

``` r
library(tidyverse)

prime <- ggplot2movies::movies

dados <- ggplot2movies::movies %>% 
  filter(!is.na(budget), budget > 0) %>% 
  select(title, year, budget, rating) %>% 
  arrange(desc(year))

modelo <- lm(rating ~ budget + year, data = dados)
```

Temos os modelo pronto. Agora importamos o Plumber: `library("plumber")` *Caso não tenha instalado use a função `install.packages("plumber")`*

``` r
p <- plumber::plumb('meuscript.R')
p$run(port = 8888)
```

Agora seu R está ocupado e alimentando o aplicativo com dados. Mas isso não é o suficiente, precisamos alimentar a `funcao_que_preve()` no arquivo meuscript.R.

Todo o processo será um app Local. Você pode acessar a interface gerada pelo plumber através do endereço que o próprio R retorna.

Temos então: ![](C:\Users\Maria%20Aparecida\Desktop\ViniciusRugby\AppsNode\PreverIMBDapp\preverIMBDapp\plumber.png) Note que no meu caso tem a função GET, que não abordamos, e nem rodamos nesse exemplo, ela não é importante para o nosso exemplo.

Alimentando a funcao\_que\_preve()
----------------------------------

Para teste usaremos um aplicativo para google chrome chamado POSTMAN

![](C:\Users\Maria%20Aparecida\Desktop\ViniciusRugby\AppsNode\PreverIMBDapp\preverIMBDapp\logo-glyph.png)

Instale o aplicativo no navegador pelo google play. A interface dele é bem simples. ![](C:\Users\Maria%20Aparecida\Desktop\ViniciusRugby\AppsNode\PreverIMBDapp\preverIMBDapp\postman.png) No Aplicativo, selecione o tipo POST, insira o endereço da rota do nosso aplicativo R

`http://127.0.0.1:8888/prever`

E na aba body, insira o código a seguir:

``` r
{
    "orcamento": 234230,
    "ano": 2000
}
```

O código vai adicionar a nossa função o orçamendo e o ano de interesse. Aperte o botão "SEND" Temos o resultado:

``` r
[
    6.0672
]
```

Agora sabemos que nosso APP está funcionando e retornando o valor esperado.

Criando um front-end
--------------------

Para o front end usaremos o Node.js e editamos com o Atom

Você pode baixar na pasta nodejsExemple [do repositorio aqui](https://github.com/viniciuslucenasouza/preverIMBDapp)

Pelo terminal de comando vá até a pasta e execute o comando: `npm install`

*Obs: Precisa ter instalado o node.JS*

Depois execute o comando `npm run dev`

Assim o aplicativo irá rodar com o ip local na porta 3000

``` r
       Local: http://localhost:3000
    External: http://10.0.0.11:3000
 ----------------------------------
          UI: http://localhost:3001
 UI External: http://10.0.0.11:3001
```

![](C:\Users\Maria%20Aparecida\Desktop\ViniciusRugby\AppsNode\PreverIMBDapp\preverIMBDapp\app.png) Pronto, nosso app está rodando na rede local. Voce pode acessar pelo seu celular através do IP External e na maquina através Local.

![](C:\Users\Maria%20Aparecida\Desktop\ViniciusRugby\AppsNode\PreverIMBDapp\preverIMBDapp\celular.jpeg)
