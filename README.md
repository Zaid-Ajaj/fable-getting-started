# Fable Getting Started

This is the simplest Fable application you can make: it is a frontend web application with an empty page that writes `Hello from Fable` to the console.

Requirements

 - [.NET Core](https://www.microsoft.com/net/download) 2.2+
 - [Node.js](https://nodejs.org/en/) 10.0+

> **Fable 3 only supports up to .NET 6.**
>
> If you are using .NET 7 or later you will need to add a `global.json` file to your project and install the [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
> 
> Example:
> 
> ```bash
> {
>   "sdk": {
>     "version": "6.0.0",
>     "rollForward": "latestMinor"
>   }
> }
> ```

### Installation

To compile the project, run the following commands

```bash
npm install
npm run build
```
`npm install` will install dependencies from [npm](https://www.npmjs.com/) which is the Node.js equivalent of dotnet's Nuget registry. These dependencies include the Fable compiler itself as it is distributed to npm to make compilation workflow as simple as possible.

`npm run build` will then start building the project by invoking [webpack](https://webpack.js.org/) which is responsible of orchestrating the compilation process.

After `npm run build` finished running, the generated javascript will be bundled in a single file called `main.js` located in the `dist` directory along with an existing `index.html` page that references that script file.

### Development mode

While developing the application, you don't want to recompile the application every time you make a change. Instead of that, you can start the compilation process in development mode which will watch changes you make in the file and re-compile automatically really fast:
```bash
npm install
npm start
```

If you already ran `npm install` then you don't need to run it again. `npm start` will start the developement mode by invoking `webpack-dev-server`: the webpack development server that starts a lightweight local server at http://localhost:8080 from which the server will serve the client application
