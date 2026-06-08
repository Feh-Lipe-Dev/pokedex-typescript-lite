# Pokédex TypeScript Lite

## Sobre o projeto

O **Pokédex TypeScript Lite** é uma aplicação back-end simples em Node.js com TypeScript, executada pelo terminal, que consulta dados de Pokémon na [PokeAPI](https://pokeapi.co/) e organiza os resultados em um catálogo local durante a execução do programa.  

O projeto faz parte da atividade "Mini Projeto Avaliativo - apiPokedex", do curso técnico Desenvolvimento web: back-end com node.js. O curso faz parte do projeto [SCTEC](https://sctec.scti.sc.gov.br/), parceria do governo do estado de Santa Catarina com a instituição de ensino [Sesi/Senai](https://cursos.sesisenai.org.br/), também de Santa Catarina. O objetivo é praticar os principais conceitos do módulo 01, como integração com APIs, tratamento de erros, manipulação de arrays, classes e TypeScript.

---

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js e JavaScript no back-end;
- TypeScript — tipagem estática;
- Interfaces e types;
- Funções tipadas;
- Arrays e objetos;
- JSON;
- Métodos de array (`map`, `filter`, `find`, `some`, `every`, `reduce`, `forEach`);
- Classes, atributos, métodos e modificadores de acesso;
- `async/await`, `Promises` e `fetch`;
- Tratamento de erros com `try/catch`;
- GitHub, GitFlow e Kanban.

---

## Tecnologias utilizadas

| Tecnologia | Versão |
|---|---|
| Node.js | >= 18 |
| TypeScript | ^5.7.3 |
| TSX | ^4.19.2 |
| PokeAPI | pública |
| Git / GitHub | — |

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (já incluído com o Node.js)
- [Git](https://git-scm.com/) (para clonar o repositório)

---

## Como instalar

Clone o repositório:

```bash
git https://github.com/Feh-Lipe-Dev/pokedex-typescript-lite
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências de desenvolvimento:

```bash
npm install
```

---

## Como executar

Compilar o TypeScript para JavaScript e executar o build:

```bash
npm run build
npm start
```

---

## Estrutura do projeto

```shell
pokedex-typescript-lite/
│
├── src/
│   ├── main.ts                      # Ponto de entrada — instancia serviços e executa o fluxo
│   │
│   ├── controllers/
│   │   └── TerminalController.ts    # Classe CatalogoPokemon — gerencia o catálogo em memória
│   │
│   ├── services/
│   │   └── PokeApiService.ts        # Integração com a PokeAPI via fetch nativo  
│   │
│   ├── models/
│   │   ├── Pokemon.ts               # Interfaces PokemonResumo e PokemonApiResponse
│   │   └── CustomErrors.ts          # Classes APIError e LocalBoxError (extends Error)
│   │
│   └── utils/
│       └── textFormatters.ts        # Funções utilitárias puras para formatação de mensagens
│
├── tsconfig.json                    # Configuração do compilador TypeScript (Strict Mode)
├── package.json                     # Manifesto com scripts e devDependencies
└── README.md
```

---

## Funcionalidades

- Buscar Pokémon por nome ou ID via PokeAPI;
- Tratar erro de Pokémon inexistente sem interromper a aplicação;
- Transformar resposta da API em objeto simplificado (`PokemonResumo`);
- Impedir registro duplicado pelo `id`;
- Listar todos os Pokémon do catálogo com formatação clara;
- Remover Pokémon do catálogo pelo ID;
- Exibir estatísticas (peso total, média de peso, validação de nomes);
- Exibir mensagens claras e padronizadas no terminal (`[OK]`, `[ERRO]`, `[AVISO]`).

---

## Exemplos de execução

### Busca válida

Entradas testadas:

```shel
pikachu
charmander
bulbasaur
```

Saídas obtidas:

```shell
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: charmander
[OK] charmander adicionado ao catálogo.
[OK] Pokémon encontrado: bulbasaur
[OK] bulbasaur adicionado ao catálogo.
```

Listagem:

```shell
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
```

---

### Busca inválida

Entrada testada:

```shell
pokemon-inexistente
```

Saída obtida:

```shell
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

### Duplicidade

Entrada testada:

```shell
charmander
```

Saída obtida:

```shell
[AVISO] charmander já está no catálogo.
```

---

### Remoção

Entrada testada:

```shell
remover ID 25
```

Saída obtida:

```shell
[OK] pikachu removido do catálogo.
```

Caso não exista:

```shell
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

---

### Saída completa do terminal (exemplo real)

```shell
.........................
 POKEMON TYPESCRIPT LITE
'''''''''''''''''''''''''
 == Buscando Pokémon por nome ou ID ==
'''''''''''''''''''''''''''''''''''''''''''''''''

[OK] Pokémon encontrado: pikachu
{ id: 25, nome: 'pikachu', tipos: [ 'electric' ], altura: 4, peso: 60 }
[ERRO] Pokémon não encontrado: pokemon-inexistente
null
 
CATÁLOGO DE POKÉMON
''''''''''''''''''''''
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: charmander
[OK] charmander adicionado ao catálogo.
[OK] Pokémon encontrado: bulbasaur
[OK] bulbasaur adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.

Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69

[OK] pikachu removido do catálogo.
[AVISO] Nenhum Pokémon encontrado com esse ID.

Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69

Buscando Pokémon por ID...
[OK] Pokémon encontrado: charmander

Verificando se todos os Pokémon têm nome...
[OK] Todos os Pokémon têm nome.

Calculando o peso total dos Pokémon no catálogo...
[OK] Peso total dos Pokémon: 154 kg

Obtendo todos os Pokémon do catálogo...
[
  { id: 4, nome: 'charmander', tipos: [ 'fire' ], altura: 6, peso: 85 },
  {
    id: 1,
    nome: 'bulbasaur',
    tipos: [ 'grass', 'poison' ],
    altura: 7,
    peso: 69
  }
]

--- Estatísticas do Catálogo ---
Total de Pokémon: 2
Peso total: 154
Média de peso: 77.00
Todos têm nome válido: true
--------------------------------

*execução finalizada.
```

---

## Conceitos aplicados

### TypeScript

Todos os arquivos `.ts` usam tipagem estática. Parâmetros, retornos de funções e propriedades de objetos possuem tipos explícitos (`string`, `number`, `boolean`, arrays tipados e `Promise<T>`).

### Interface PokemonResumo

Representa os dados simplificados do Pokémon extraídos da API. Contém: `id`, `nome`, `tipos`, `altura` e `peso`.

### Interface PokemonApiResponse

Representa somente os campos relevantes do retorno bruto da PokeAPI usados no mapeamento.

### Fetch e async/await

A função `buscarPokemon` em `PokeApiService.ts` usa `fetch` nativo do Node.js (>= 18), com `async/await` para aguardar a resposta e `.json()` para processar o corpo.

### Tratamento de erros

Utiliza `try/catch` em toda requisição HTTP. Status 404 é tratado com aviso específico. Erros de rede ou inesperados são capturados e exibem mensagem amigável sem interromper a aplicação.

### Métodos de array utilizados

| Método | Onde foi usado |
|---|---|
| `map` | Extrai os nomes dos tipos do array `types` da API |
| `some` | Verifica se o Pokémon já existe no catálogo (duplicidade) |
| `filter` | Remove o Pokémon do catálogo pelo ID |
| `find` | Busca um Pokémon específico pelo ID no catálogo |
| `forEach` | Itera o catálogo para exibir cada Pokémon no terminal |
| `every` | Valida se todos os Pokémon do catálogo possuem nome válido |
| `reduce` | Calcula o peso total do catálogo |

### Classe CatalogoPokemon

Localizada em `TerminalController.ts`. Possui:

- Atributo privado `pokemons: PokemonResumo[]`
- Método `adicionar(pokemon)` — com validação de duplicidade
- Método `listar()` — exibe todos os Pokémon formatados
- Método `remover(id)` — remove pelo ID com verificação prévia
- Método `buscarPorId(id)` — usa `find`
- Método `todosTêmNome()` — usa `every`
- Método `calcularPesoTotal()` — usa `reduce`
- Método `exibirEstatisticas()` — exibe resumo do catálogo

### Erros customizados

`APIError` e `LocalBoxError` estendem a classe nativa `Error`, com nome e informações adicionais.

---

## Organização do Kanban

Link do Kanban: [Pokedex TS Lite Kanban - Trello](https://trello.com/b/3aTY45du/pokedex-typescript-lite)

---

## Branches utilizadas

- main

---

## Melhorias futuras

- Criar menu interativo no terminal com `readline`;
- Salvar catálogo em arquivo JSON de forma contínua;
- Exibir HP, ataque e defesa do Pokémon;
- Criar filtros por tipo de Pokémon;
- Criar uma API REST própria com Express ou Fastify.
