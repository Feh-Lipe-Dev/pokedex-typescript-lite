# Pokédex TypeScript Lite

## Sobre o projeto

O **Pokédex TypeScript Lite** é uma aplicação back-end simples em Node.js com TypeScript, executada pelo terminal, que consulta dados de Pokémon na [PokeAPI](https://pokeapi.co/) e organiza os resultados em um catálogo local durante a execução do programa. Os dados do catálogo são persistidos no arquivo `pc_box.json`.

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
- Git

---

## Como instalar

Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
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

Execute o projeto em ambiente de desenvolvimento (usando `tsx`):

```bash
npm run dev
```

Para compilar o TypeScript para JavaScript e executar o build:

```bash
npm run build
npm start
```

---

## Estrutura do projeto

```
pokedex-typescript-lite/
│
├── src/
│   ├── main.ts                      # Ponto de entrada — instancia serviços e executa o fluxo
│   │
│   ├── controllers/
│   │   └── TerminalController.ts    # Classe CatalogoPokemon — gerencia o catálogo em memória
│   │
│   ├── services/
│   │   ├── PokeApiService.ts        # Integração com a PokeAPI via fetch nativo
│   │   └── BoxService.ts            # Persistência local usando node:fs/promises
│   │
│   ├── models/
│   │   ├── Pokemon.ts               # Interfaces PokemonResumo e PokemonApiResponse
│   │   └── CustomErrors.ts          # Classes APIError e LocalBoxError (extends Error)
│   │
│   └── utils/
│       └── textFormatters.ts        # Funções utilitárias puras para formatação de mensagens
│
├── pc_box.json                      # Banco de dados local em JSON (array de Pokémon)
├── tsconfig.json                    # Configuração do compilador TypeScript (Strict Mode)
├── package.json                     # Manifesto com scripts e devDependencies
└── README.md
```

---

## Funcionalidades

- Buscar Pokémon por nome ou ID via PokeAPI;
- Tratar erro de Pokémon inexistente sem interromper a aplicação;
- Transformar resposta da API em objeto simplificado (`PokemonResumo`);
- Adicionar Pokémon ao catálogo local em memória;
- Impedir registro duplicado pelo `id`;
- Listar todos os Pokémon do catálogo com formatação clara;
- Remover Pokémon do catálogo pelo ID;
- Exibir estatísticas (peso total, média de peso, validação de nomes);
- Salvar e carregar o catálogo no arquivo `pc_box.json`;
- Exibir mensagens claras e padronizadas no terminal (`[OK]`, `[ERRO]`, `[AVISO]`).

---

## Exemplos de execução

### Busca válida

Entrada testada:
```
pikachu
```

Saída obtida:
```
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
```

Listagem:
```
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

---

### Busca inválida

Entrada testada:
```
pokemon-inexistente
```

Saída obtida:
```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

### Duplicidade

Entrada testada:
```
adicionar pikachu duas vezes
```

Saída obtida:
```
[OK] pikachu adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
```

---

### Remoção

Entrada testada:
```
remover ID 25
```

Saída obtida:
```
[OK] Pokémon removido do catálogo.
```

Caso não exista:
```
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

---

### Saída completa do terminal (exemplo real)

```
========================================
       Pokédex TypeScript Lite          
========================================

--- Buscando Pokémon na PokeAPI ---

[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: charmander
[OK] charmander adicionado ao catálogo.
[OK] Pokémon encontrado: bulbasaur
[OK] bulbasaur adicionado ao catálogo.

--- Testando duplicidade ---

[OK] Pokémon encontrado: pikachu
[AVISO] pikachu já está no catálogo.

--- Testando Pokémon inexistente ---

[ERRO] Pokémon não encontrado: pokemon-inexistente

--- Listando catálogo completo ---

Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69

--- Exibindo estatísticas ---

--- Estatísticas do Catálogo ---
Total de Pokémon: 3
Peso total: 214
Média de peso: 71.33
Todos têm nome válido: true
--------------------------------

--- Removendo pikachu (ID 25) do catálogo ---

[OK] Pokémon removido do catálogo.

--- Catálogo após remoção ---

Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69

--- Salvando catálogo no pc_box.json ---

[OK] Catálogo salvo com sucesso em pc_box.json.

========================================
           Execução concluída           
========================================
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

Link do Kanban: `COLE_AQUI_O_LINK`

---

## Branches utilizadas

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`

---

## Melhorias futuras

- Criar menu interativo no terminal com `readline`;
- Salvar catálogo em arquivo JSON de forma contínua;
- Exibir HP, ataque e defesa do Pokémon;
- Criar filtros por tipo de Pokémon;
- Criar uma API REST própria com Express ou Fastify.
