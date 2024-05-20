This is a repo to test SQLite and PGLite support within NextJS. Mainly to establish support for [ElectricSQL](https://electric-sql.com/) projects

tested with:

Bun 1.1.8

```
  "dependencies": {
    "@electric-sql/pglite": "^0.1.5",
    "electric-sql": "^0.11.1",
    "next": "^14.2.0",
    "wa-sqlite": "rhashimoto/wa-sqlite#v0.9.13"
  },
```

|        | Webpack | Turbopack |
| ------ | ------- | --------- |
| SQLite | ✅      | ❌        |
| PGLite | ❌      | ❌        |

# Setup

Install:

```
bun i
```

## With NextJS webpack

Start:

```
bun run dev
```

## With NextJS Turbopack

Start:

```
bun run dev -- --turbo
```

# Test in browser

## SQLite test page: [http://localhost:3000/sqlite]

Using webpack, SQLite loads in the browser, though we don't have a server in order to make reproduction easier.
![SQLite succeeding in NextJS webpack](<public/Screenshot 2024-05-20 at 4.44.20 PM.png>)

With Turbopack it is not bundling properly.
![SQLite failing in NextJS Turbopack](<public/Screenshot 2024-05-20 at 4.40.52 PM.png>)

## PGLite test page: [http://localhost:3000/pglite]

Using webpack, PGLIte is not bunding properly.
![PGLIte failing in NextJS webpack](<public/Screenshot 2024-05-20 at 4.46.43 PM.png>)

Using Turbopack, PGLIte is not bunding properly.
![PGLIte failing in NextJS Turbopack](<public/Screenshot 2024-05-20 at 4.47.42 PM.png>)
