# Guia de boas práticas

## Nomenclatura

### Variáveis

- `constantes` NOME_DA_VARIAVEL
- `comuns` nomeDaVariavel
- `classes` NomeDaClasse

### Métodos

- `arrow function com retorno direto` 
    ```js 
    () => "retornado esta string diretamente"
    ```
- `arrow function com retorno`
    ```js
    () => {
        const hello = 'olá'
        return `${hello} retornando string concatenada`
    }
    ```
- `arrow function com unico parametro` 
    ```js 
    param => para + 2
    ```

### Branches

O nomes das branches seguem o padrão do GitFlow e são criadas usando
preferencialmente o nome em inglês.

- novas funcionalidades começando com `feature/` (ex: `feature/contribution-guide`)
- correções começando com `fix/` (ex: `fix/password-validation`)
- refatorações começando com `refactor/` (ex: `refactor/login-view`)
- releases começando com `release/`, seguido com o número da versão (ex: `release/v1.1.34`)
- correções de versões em produção começando com `hotfix/` (ex: `hotfix/login-error`)

- Material auxiliar para GitFlow
[Utilizando o fluxo Git Flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)
[Gerenciando seus branches com o Git Flow](https://tableless.com.br/git-flow-introducao/)

### Commits

1. Limitar o título do commit a 50 caracteres
2. Usar verbos no imperativo para compor o título (ex: `add initial contribution guide`)

Exemplo:

```sh
git commit -m "fix typo in introduction to user guide"
```

### Pastas e arquivos

A convenção dos nomes das pastas e dos arquivos é utilizar tudo minúsculo
e as palavras separadas por hífen:

```sh
module
└─┬ vending-machines
  ├── vending-machines.state.js
  ├── vending-machines.view.js
  └── vending-machines.container.js
```

- Sempre use a sintaxe JSX.

## Estrutura

[Estrutura](https://github.com/JozielOliveira/boilerplate-react/blob/master/Arquiteture.md)
