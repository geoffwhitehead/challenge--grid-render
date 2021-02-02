# LandTech Exercise

## Exercise:

Render a 100 x 100 grid with cells colored based on the variable price.

![Rendered Grid](/assets/grid.png?raw=true "Rendered Grid")

## Structure

**packages/client**: Create react app

**packages/server**: Nestjs express app with a single `get` route to fetch the houses data.

## Running the app

1. Install Node: https://nodejs.org/en/download/

2. clone the repo and run `yarn` or `npm install` in both `packages/client` and `packages/server`

3. **client**: run `yarn start` from `packages/client` to host the react app on `localhost:3000`

4. **server**: run `yarn start` from `packages/server` to host the server on `localhost:3001`

## Roadmap / Improvements

There are a few different issues i would tackle if i were to take this further.

1. **Rendering Performance:**: Rendering performance of the grid could be improved. I'd look into approaches using a better rendering engine. Canvas, WebGL, PixiJS, SVG. Using div elements satisfied the use case, but likely isn't the most performant.
2. **Data Streaming**: I'm pulling a lot of data into memory before resolving a `GET /houses` HTTP request. I'd look into streaming this instead, especially if the grid sizes were to grow.
3. **Grid Metadata**: Currently the Grid component is configured to accept a gridSize prop. The API could return some metadata about the grid such as the min and max plots for x and y. This could be used to determine the required grid size and potentially optimize the rendering.
