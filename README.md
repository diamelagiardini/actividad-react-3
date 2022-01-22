# Ejercicio integrador

Para este ejercicio vamos a hacer una pequeña web estática con React.

El diseño sugerido es [este](https://app.zeplin.io/project/5c3f3f3e182f8e339ca49b34/screen/5e5fddce588192130135038f), pero sentite libre de modificarlo como más te guste o hacer un estilado mínimo: la idea es practicar React y no maquetado.

**Si no tenés acceso a esa web, por favor enviame tu mail por discord. Si ya lo hiciste, debes aceptar la invitación de Zeplin que llegó a tu correo.**

Dado el siguiente array de objetos,

```js
const products = [
  {
    title: "Coombes",
    type: "Lounge",
    price: 2600,
    rating: 4,
    img: "https://i.imgur.com/ZAxMGG5.png",
    isAvailable: true,
    onSale: false,
  },
  {
    title: "Keeve Set",
    type: "Table & Chairs",
    price: 590,
    rating: 4,
    img: "https://i.imgur.com/tT8sFIs.jpeg",
    isAvailable: false,
    onSale: false,
  },
  {
    title: "Nillè",
    type: "Armchair",
    price: 950,
    rating: 5,
    img: "https://i.imgur.com/Vx1cZY0.png",
    isAvailable: false,
    onSale: true,
  },
  {
    title: "Blanko",
    type: "Side table",
    price: 90,
    rating: 4,
    img: "https://i.imgur.com/N1Bf4ox.jpg",
    isAvailable: true,
    onSale: false,
  },
  {
    title: "Momo",
    type: "Shelves",
    price: 890,
    rating: 4,
    img: "https://i.imgur.com/AlKxDE4.jpeg",
    isAvailable: true,
    onSale: false,
  },
  {
    title: "Penemillè",
    type: "Chair",
    price: 120,
    rating: 4,
    img: "https://i.imgur.com/pmANPjN.jpeg",
    isAvailable: true,
    onSale: false,
  },
  {
    title: "Kappu",
    type: "Shelves",
    price: 420,
    rating: 4,
    img: "https://i.imgur.com/s2rsPa1.jpg",
    isAvailable: true,
    onSale: false,
  },
];
```

### Primera parte

1. Crear un nuevo proyecto de React
2. En App.js, copiar el array.
3. Por cada uno de los elementos del array, mostrar un componente `<Card>` que muestre las propiedades: `title`, `type`, `price` e `img`.
4. Estilar las tarjetas con `scss`, declarando un archivo llamado `Card.scss`, siguiendo el estilado sugerido o como más te guste.

### Segunda parte

1. Agregar dos `props` a cada componente `Card`: `isAvailable` y `onSale`.
2. Si `isAvailable` es `false`, el fondo de la tarjeta debe mostrarse en gris. (O cualquier otro estilado que prefieras, por ejemplo, la imagen puede tener un overlay gris, el titulo puede estar tachado, etc).
3. Si `onSale` es `true`, al lado del titulo debe aparecer un `span` que diga "ON SALE!"

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
