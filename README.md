# LandTech Exercise

## Exercise:

Render a 100 x 100 grid with cells colored based on the variable price.

![Rendered Grid](/assets/grid.png?raw=true "Rendered Grid")

## Structure

**packages/client**: Create react app

**packages/server**: Nestjs express app with a single `get` route to fetch the houses data.

## Running the app

clone the repo and run `yarn` or `npm install` in both `packages/client` and `packages/server`

**client**: run `yarn start` from `packages/client` to host the react app on `localhost:3000`

**server**: run `yarn start` from `packages/server` to host the server on `localhost:3001`
