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

## Boas Práticas

### Regras Básicas

- Apenas **um** componente por arquivo.

  - Contudo, múltiplos componentes são permitidos quando são dependentes um do outro e apenas 1 tem retorno [Statefull ou Stateless ](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) são permitidos por arquivo. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).

  ```jsx
  function Hello(props) {
    return <div>Hello {props.name}</div>
  }

  export default class HelloWorld extends Component {
    render() {
      return <Hello name="World" />
    }
  }
  ```

- Sempre use a sintaxe JSX.

* Use arrow functions para variáveis locais.

  ```jsx
  function ItemList(props) {
    return (
      <div>
        {props.items.map((item, index) => (
          <Item key={item.key} onPress={() => fazerAlgoCom(item.name, index)} />
        ))}
      </div>
    )
  }
  ```
