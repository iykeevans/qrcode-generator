## This is an QR Code Generator [QRCode Generator](https://the-qrcode-generator.vercel.app/) to have a feel

Built with Vue JS and Vuetify

## Getting Started

First, run the development server:

```bash
// Install all needed dependencies
yarn

yarn run serve


```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

Test and Lint

```bash
// Test function
yarn run test

// Lint code with eslint
yarn run lint


```

### What has been done

- [x] Implement qrcode generation
- [x] Implement view all qrcodes generated
- [x] Implement app tests

### What needs to be done

- [ ] Add a 404 Page for invalid routes

## NOTE FOR ANYONE INTERESTED IN CONTRIBUTING OR USING THIS APP

- Because the app is making a fetch request to a url that doesn't send an options response, a node reverse proxy server was setup using the cors anywhere package to avoid the cors issue. This is used in the `src/services folder` as the baseURL

- Add reusable components to the `src/components` folder

- Follow the simple process of the api factory located in `src/services` folder, this is the inteface that handles external api calls.

## Deployment

This App was deployed with [Vercel](https://vercel.com/)

## Lastly

Do not hesitate to get across to me incase of any question.
