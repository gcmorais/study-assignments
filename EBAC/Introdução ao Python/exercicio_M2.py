# -*- coding: utf-8 -*-
"""exercicio_M2.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1b0CL4thHaBAMqg4vMgduRoR9qRF-wJ8j

<img src="https://raw.githubusercontent.com/andre-marcos-perez/ebac-course-utils/main/media/logo/newebac_logo_black_half.png" alt="ebac-logo">

---

# **Módulo** | Python: Estruturas de Dados
Caderno de **Exercícios**<br>
Professor [André Perez](https://www.linkedin.com/in/andremarcosperez/)

---

# **Tópicos**

<ol type="1">
  <li>Listas;</li>
  <li>Conjuntos;</li>
  <li>Dicionários.</li>
</ol>

---

# **Exercícios**

## 1\. Listas

Criei uma lista chamada `filmes` com o nome dos 10 primeiros filmes mais bem avaliados no site no [IMDB](https://www.imdb.com/chart/top/). Imprima o resultado.
"""

filmes = ['Um Sonho de Liberdade', 'O Poderoso Chefão', 'Batman: O Cavaleiro das Trevas', 'O Poderoso Chefão II', '12 Homens e uma Sentença', 'A Lista de Schindler', 'O Senhor dos Anéis: O Retorno do Rei', 'Pulp Fiction: Tempo de Violência', 'O Senhor dos Anéis: A Sociedade do Anel', 'Três Homens em Conflito']
print(filmes)

"""Simule a movimentação do *ranking*. Utilize os métodos `insert` e `pop` para trocar a posição do primeiro e do segundo filme da lista. Imprima o resultado.


"""

filmes = ['Um Sonho de Liberdade', 'O Poderoso Chefão', 'Batman: O Cavaleiro das Trevas', 'O Poderoso Chefão II', '12 Homens e uma Sentença', 'A Lista de Schindler', 'O Senhor dos Anéis: O Retorno do Rei', 'Pulp Fiction: Tempo de Violência', 'O Senhor dos Anéis: A Sociedade do Anel', 'Três Homens em Conflito']
filmes.pop(1)
filmes.insert(0, 'O Poderoso Chefão')
print(filmes)

"""---

## 2\. Conjuntos

Aconteceu um erro no seu *ranking*. Simule a duplicação dos três últimos filmes da lista. Imprima o resultado.
"""

filmes = ['Um Sonho de Liberdade', 'O Poderoso Chefão', 'Batman: O Cavaleiro das Trevas', 'O Poderoso Chefão II', '12 Homens e uma Sentença', 'A Lista de Schindler', 'O Senhor dos Anéis: O Retorno do Rei', 'Pulp Fiction: Tempo de Violência', 'O Senhor dos Anéis: A Sociedade do Anel', 'Três Homens em Conflito', 'Pulp Fiction: Tempo de Violência', 'O Senhor dos Anéis: A Sociedade do Anel', 'Três Homens em Conflito']
print(filmes)

"""Utiliza a conversão `set` e `list` para remover os valores duplicados. Imprima o resultado."""

filmes = ['Um Sonho de Liberdade', 'O Poderoso Chefão', 'Batman: O Cavaleiro das Trevas', 'O Poderoso Chefão II', '12 Homens e uma Sentença', 'A Lista de Schindler', 'O Senhor dos Anéis: O Retorno do Rei', 'Pulp Fiction: Tempo de Violência', 'O Senhor dos Anéis: A Sociedade do Anel', 'Três Homens em Conflito', 'Pulp Fiction: Tempo de Violência', 'O Senhor dos Anéis: A Sociedade do Anel', 'Três Homens em Conflito']
print(list(set(filmes)))

"""---

## 3\. Dicionários

Repita os exercícios da parte 1 (listas). Os elementos da lista `filmes` devem ser dicionários no seguinte formato: `{'nome': <nome-do-filme>, 'ano': <ano do filme>}, 'sinopse': <sinopse do filme>}`.
"""

filmes = {
    "1": {
        'nome': 'Um Sonho de Liberdade',
        'ano': 1994,
        'sinopse': 'Dois homens presos se reúnem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum.',
    },
    "2": {
        'nome': 'O Poderoso Chefão',
        'ano': 1972,
        'sinopse': 'O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.',
    },
    '3': {
        'nome': 'Batman: O Cavaleiro das Trevas',
        'ano': 2008,
        'sinopse': 'Agora com a ajuda do tenente Jim Gordon e do promotor público Harvey Dent, Batman tem tudo para banir o crime de Gotham City de uma vez por todas. Mas em breve, os três serão vítimas do Coringa, que pretende lançar Gotham em uma anarquia.',
    },
    "4": {
        'nome': 'O Poderoso Chefão II',
        'ano': 1974,
        'sinopse': 'Em 1950, Michael Corleone, agora à frente da família, tenta expandir o negócio do crime a Las Vegas, Los Angeles e Cuba. Paralelamente, é revelada a história de Vito Corleone, e de como saiu da Sicília e chegou a Nova Iorque.',
    },
    "5": {
        'nome': '12 Homens e uma Sentença',
        'ano': 1957,
        'sinopse': 'O julgamento de um assassinato em Nova Iorque é frustrado por um único membro, cujo ceticismo força o júri a considerar cuidadosamente as evidências antes de dar o veredito.',
    },
    "6": {
        'nome': 'A Lista de Schindler',
        'ano': 1993,
        'sinopse': 'Na Polônia ocupada pelos alemães durante a Segunda Guerra Mundial, o industrial Oskar Schindler começa a ser preocupar com seus trabalhadores judeus depois de testemunhar sua perseguição pelos nazistas.',
    },
    "7": {
        'nome': 'O Senhor dos Anéis: O Retorno do Rei',
        'ano': 2003,
        'sinopse': 'Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.',
    },
    "8": {
        'nome': 'Pulp Fiction: Tempo de Violência',
        'ano': 1994,
        'sinopse': 'As vidas de dois assassinos da máfia, um boxeador, um gângster e sua esposa, e um par de bandidos se entrelaçam em quatro histórias de violência e redenção.',
    },
    "9": {
        'nome': 'O Senhor dos Anéis: A Sociedade do Anel',
        'ano': 2001,
        'sinopse': 'Um manso hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média das Trevas.',
    },
    "10": {
        'nome': 'Três Homens em Conflito',
        'ano': 1966,
        'sinopse': 'Um impostor se junta com dois homens para encontrar fortuna num remoto cemitério.',
    },
}
print(filmes)