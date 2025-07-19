# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



Assignment !!!!!

1. Creating a popular people view, which will display a list of actors both their image and a few of their popoular films. Displayed like the movies list page. When clicked on an actor it will bring you to that actors biography page

method
started by editing the siteHeader 'option 3' and changed to 'actors'. Then chaged the path to /actors. In src/index added to link actors which ill remove later. In routes added the route for actors to route to ActorsPage in pages. Created an Actors page in pages imported this to src/index and added data to the minmal data to actors page to test its working. TO -When actors is clicked is takes user to actors page. Nothing here at the minute.

next created interfaces for actors and actorsImages from TMBD api documentation.

created actorCard and ActorList components, similar to starter labs.
updataed the actorPage to import the cards and list of actors to display fetched data from TBMD.

.

2. same thing as above for 2 new views, TV shows and  ?popular movies?

Basic method: changed suteHeader, updated the routes in index, created tv showsPage to fetch the data from tmdb, Created two components tvShow Card and Tv Show List.
