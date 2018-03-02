# 10 - React Forms

> Esta POC valida a possibilidade de administrar o state management de múltiplos components com o MobX. Também foi possível executar a validação de frameworks visuais e de navegação de rotas.

## Linguagem e frameworks
> Foi desenvolvido em **JavaScript**, **Node.js** na versão **9.4.0** e o **npm** na
versão **5.4.0**.

### Frameworks

| Nome             | Finalidade                                                                                     |
|------------------|------------------------------------------------------------------------------------------------|
| create-react-app | Biblioteca necessária para inicializar um novo projeto do React, com o webpack já configurado. |
| react            | Biblioteca nativa do React.                                                                    |
| react-router-dom | Biblioteca para criar rotas de navegação no projeto.                                           |
| material-ui      | Biblioteca de components visuais inspirados no Material Design.                                |
| mobx             | Biblioteca de state management com observers e observables.                                    |
| mobx-react       | Biblioteca para realizar a portabilidade do mobx para o React.                                 |

## Instalação e deploy

```bash
# Instalar dependencies
npm install

# Executar projeto
npm run start
```

## Conclusão
> Foi possível validar com êxito a prova de conceito. Foram adicionados rotas particulares para cada item diante uma lista de produtos. Caso ocorra a alteração de valores de um determinado state, os components em que ele está implementado, refletirá em tempo real as alterações, isso foi possível com a utilização dos observers e observables.