# -*- coding: utf-8 -*-
"""exercicio_M4.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1_TVD9xvT9kxvC6znO22S0gwwNNcithq4

<img src="https://raw.githubusercontent.com/andre-marcos-perez/ebac-course-utils/main/media/logo/newebac_logo_black_half.png" alt="ebac-logo">

---

# **Módulo** | Python: Arquivos & Funções
Caderno de **Exercícios**<br>
Professor [André Perez](https://www.linkedin.com/in/andremarcosperez/)

---

# **Tópicos**

<ol type="1">
  <li>Leitura;</li>
  <li>Escrita;</li>
  <li>Funções;</li>
  <li>Escopo.</li>
</ol>

---

# **Exercícios**

## 0\. Preparação do ambiente

Neste exercício vamos trabalhar com os arquivos de csv e texto definidos abaixo. Execute cada uma das células de código para escrever os arquivos na sua máquina virtual.

* **carros.csv**: arquivo csv com informações sobre carros (venda, manutenção, portas, etc.).
"""

# Commented out IPython magic to ensure Python compatibility.
# %%writefile carros.csv
# id,valor_venda,valor_manutencao,portas,pessoas,porta_malas
# 1,vhigh,med,2,2,small
# 2,med,vhigh,2,2,small
# 3,low,vhigh,2,2,small
# 4,low,high,2,2,small
# 5,low,high,2,2,small
# 6,low,high,4,4,big
# 7,low,high,4,4,big
# 8,low,med,2,2,small
# 9,low,med,2,2,small
# 10,low,med,2,2,small
# 11,low,med,4,4,big
# 12,low,low,2,2,small
# 13,low,low,4,4,small
# 14,low,low,4,4,med

"""* **musica.txt**: arquivo texto com a letra da música Roda Viva do Chico Buarque."""

# Commented out IPython magic to ensure Python compatibility.
# %%writefile musica.txt
# Roda Viva
# Chico Buarque
# 
# Tem dias que a gente se sente
# Como quem partiu ou morreu
# A gente estancou de repente
# Ou foi o mundo então que cresceu
# A gente quer ter voz ativa
# No nosso destino mandar
# Mas eis que chega a roda viva
# E carrega o destino pra lá
# 
# Roda mundo, roda-gigante
# Roda moinho, roda pião
# 
# O tempo rodou num instante
# Nas voltas do meu coração
# A gente vai contra a corrente
# Até não poder resistir
# Na volta do barco é que sente
# O quanto deixou de cumprir
# Faz tempo que a gente cultiva
# A mais linda roseira que há
# Mas eis que chega a roda viva
# E carrega a roseira pra lá
# 
# Roda mundo, roda-gigante
# Roda moinho, roda pião

"""---

## 1\. Funções para arquivo csv

Complete a função abaixo para extrair uma coluna do arquivo csv em uma lista. Os elementos devem ter o tipo de dado correto.
"""

def extrai_coluna_csv(nome_arquivo: str, indice_coluna: int, tipo_dado: str):

  coluna = []

  # leia o arquivo com o comando 'with' utilizando o parametro 'nome_arquivo'
  with open(file=nome_arquivo, mode='r', encoding='utf8') as arquivo:
    next(arquivo)
    linha = arquivo.readline()

  # extraia a coluna do arquivo utilizando o parametro 'indice_coluna'
    while linha:
        linha_separada = linha.split(',')
 # use a estrutura de decisão if/elif/else para fazer a conversão do tipo de dados utilizando o parametro 'tipo_dado'
        if tipo_dado == 'str':
          coluna.append(str(linha_separada[indice_coluna]))
        elif tipo_dado == 'int':
          coluna.append(str(linha_separada[indice_coluna]))
        linha = arquivo.readline()


  return coluna

"""Você pode testar a função com os códigos abaixo."""

# extrair a coluna valor_venda
valor_venda = extrai_coluna_csv(nome_arquivo='./carros.csv', indice_coluna=1, tipo_dado='str')
print(valor_venda) # deve retornar ['vhigh', 'med', 'low', ...]

# extrair a coluna pessoas
pessoas = extrai_coluna_csv(nome_arquivo='./carros.csv', indice_coluna=4, tipo_dado='int')
print(pessoas) # deve retornar [2, 2, 2, ...]

"""---

## 2\. Funções para arquivo txt

Complete a função abaixo para extrair uma as palavras de uma linha do arquivo txt em uma lista.
"""

def extrai_linha_txt(nome_arquivo: str, numero_linha: int):

  palavras_linha = []

  with open(file=nome_arquivo, mode='r', encoding='utf8') as arquivo:
      for linha in nome_arquivo:
        linha = arquivo.readline()
        if "eis" in linha:
          palavras_linha.append(linha)

          palavras_linha = linha.split()


 # leia o arquivo com o comando 'with' utilizando o parametro 'nome_arquivo'
 # extraia a linha do arquivo utilizando o parametro 'numero_linha'
 # quebre a linha em palavras com o comando split, note que o separador é um espaço ' '

  return palavras_linha

"""Você pode testar a função com os códigos abaixo."""

linha10 = extrai_linha_txt(nome_arquivo='./musica.txt', numero_linha=10)
print(linha10) # deve retornar ['Mas', 'eis', 'que', 'chega', 'a', 'roda', 'viva']

"""---"""