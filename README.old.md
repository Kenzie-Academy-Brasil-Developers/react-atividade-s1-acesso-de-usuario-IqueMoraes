# 📋 Sobre a atividade

Nesta atividae o principal objetivo é entender como podemos utilizar as renderizações condicionais no react, com um exemplo simples.

# ℹ️ Informações úteis

## Resultado

![](https://i.imgur.com/9MBjLUa.gif)

## 🖐️🍝Mão na massa!

1.  Crie um projeto react usando o comando: `yarn create react-app***nomedoseuprojeto***`

2.  Após isso, abra seu projeto no seu editor e execute o comando `yarn start` para iniciar o servidor com seu app.

3.  Crie um componente chamado `RestrictedPage` dentro de uma pasta `components`, assim como vimos nas aulas anteriores.

    ![](https://i.imgur.com/FXxrsot.png)

4.  O componente `App.js` deve possuir um **state** _isLoggedIn_, _setIsLoggedIn_ que é instanciado a partir do useState e inicializado como false.

5.  Além disso, o App possui:

    *   Uma constante `user` que é uma string com o seu nome
    *   Uma função Login que atualiza o state isLoggedIn para true
    *   Uma função Logout que atualiza o state isLoggedIn para false
6.  O componente `RestrictedPage` recebe quatro props `{isLoggedIn, user, Login, Logout}`

7.  O componente RestrictedPage deverá:

    *   Vamos receber o state isLoggedIn através de props, se esse state for verdadeiro, ele deverá renderizar a mensagem _Bem-vindo {user}_ e um button chamando a função **Logout**
    *   Caso a props seja false ele deverá renderizar a mensagem _Você não pode acessar essa página_ e um button chamando a função **Login**

## 💪Agora é com você

*   Estilize sua aplicação, **seja original** 😉

# 💡Conhecimentos aplicados:

*   Fundamentos do React
*   Passagem de valores para um componente
*   Componentização e Reutilização
*   Utilização dos valores vindo das props no componente
*   Renderização condicional
