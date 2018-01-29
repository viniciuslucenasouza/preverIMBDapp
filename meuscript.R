#* @get /solta
solta_10 <- function() {
  dados %>% 
    sample_n(10)
}

#* @post /prever
funcao_que_preve <- function(orcamento, ano) {
  d <- data.frame(budget = as.numeric(orcamento), year = as.numeric(ano))
  predict(modelo, newdata = d)
}
