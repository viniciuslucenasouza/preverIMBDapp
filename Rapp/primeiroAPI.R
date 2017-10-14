install.packages("ggplot2movies")
install.packages("tidyverse")
install.packages("plumber")


setwd("C:/Users/Maria Aparecida/Desktop/ViniciusRugby/EstaciodeSa/Programação em R")
library(tidyverse)

prime <- ggplot2movies::movies

dados <- ggplot2movies::movies %>% 
  filter(!is.na(budget), budget > 0) %>% 
  select(title, year, budget, rating) %>% 
  arrange(desc(year))

dados

modelo <- lm(rating ~ budget + year, data = dados)
summary(modelo)

#Um modelo Melhor
modelo2 <- lm(rating ~ budget * year, data = dados)
summary(modelo2)

#Fun??o preditiva:

funcao_que_preve <- function(orcamento, ano) {
  predict(modelo, newdata = data.frame(budget = orcamento, year = ano))
}

#Fun??o que apresenta uma amostra de 10 obs aleatorias
solta_10 <- function() {
  dados %>% 
    sample_n(10)
}

#Para criar uma API com o plumber, voc? precisa de tr?s coisas:
  #1. Uma fun??o que executa uma a??o
  #2. Uma documenta??o da fun??o
  #3. Selecionar uma porta para disponibilizar sua api

library("plumber")

p <- plumber::plumb('meuscript.R')
p$run(port = 8888)

#PLOTANDO DADOS
ggplot(dados, aes(y = rating, x = budget)) + 
  geom_point(aes(colour = year)) +
  geom_smooth(method = "lm")+
  geom_point(x=10000,y=my_rt,colour="red", size=2)

ggplot(dados, aes(y = budget, x = year)) + 
  geom_point(aes(colour = year)) +
  geom_smooth(method = "lm")+
  geom_point(x=10000,y=my_rt,colour="red", size=2)

#E se trasformarmos a variave budget
library("dplyr")

dados2 <- dplyr::mutate(dados, lnbget = log(budget))
ggplot(dados2, aes(y = lnbget, x = year)) + 
  geom_point(aes(colour = year)) +
  geom_smooth(method = "lm")+
  geom_point(x=10000,y=my_rt,colour="red", size=2)

ggplot()+  
geom_point(aes(y=my_rt, x=10000, size=2),colour="blue")

my_rt <- as.numeric(funcao_que_preve(100000,2011))
my_rt
