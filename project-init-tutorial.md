// ❗: this is a copy of the tutorial used to initialize the project. the tutorial might have changed, and changes have been made post-initialization

# Tutorial: Create a svelte blog page and host it for free

## Requirments
// ❓ any other text editor
* VS Code
  * Svelte VS Code extension
* Any terminal (cmd, bash, powershell)
* node (v16+)
* yarn package manager

## Creating project
### Scaffold svelte project
Scaffold using official `sveltejs` project template
```npx degit sveltejs/template {NAME OF PROJECT} && cd {NAME OF PROJECT}```

### Enable typescript
```node scripts/setupTypeScript.js```

Install dependencies
``` yarn install```

### Setting upp tailwind
Install tailwind, postcss and autoprefixers
```yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest```

Initialize tailwind configuration files
```npx tailwindcss init -p```

Enable purging in `tailwind.config.js`
```
module.exports = {
    ...
    purge: {
        enabled: !process.env.ROLLUP_WATCH,
        content: ['./public/index.html', './src/**/*.svelte'],
        options: {
            defaultExtractor: content => [
                ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
                ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
            ],
        }
    }
    ...
}
```

Include tailwind in your global CSS
Alternative: Creating a `.css` file that imports all the tailwind stylings and link that in `index.html`
Why not? More files. Moves tailwind out of the svelte process, making it clear in `App.svelte` how tailwind is introduced.
Benefits: Less (dev) dependencies
[TODO!] svelte only wants one `<style />` tag
Introduce the following styling scope to App.svelte
```
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
```

Delete `public/global.css`
```
del public/global.css
```

Remove `global.css` reference from `public/index.html`
```REM 	<link rel='stylesheet' href='/global.css'>```

// ❓ maybe better to do this before the public css refs. preparing build first and refs after
Install svelte pre-processor and postcss load config
```
yarn add --dev svelte-preprocess postcss-load-config
```

// :
Modify `rollup.config.js` to include the postcss plugin in svelte pre-processors
```
...
export default {
    ...
    plugins: [
      ...
      svelte({
        ...
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: true,
        })
        ...
      })
      ...
    ]
    ...
}
```

Now to run the dev server and see what is broken
```yarn dev```

## Deploying/Hosting