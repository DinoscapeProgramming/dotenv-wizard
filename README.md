# dotenv-wizard

**Interactive CLI to generate your `.env` file from a `.env.example`.**

`dotenv-wizard` makes setting up environment variables for your project quick and painless. It reads your `.env.example` file, prompts you for each variable, and generates a ready-to-use `.env` file—perfect for onboarding new developers or configuring projects.

---

## Features

- Reads `.env.example` automatically  
- Interactive prompts for each variable  
- Supports default values from `.env.example`  
- Generates a `.env` file  
- Optionally masks sensitive input like passwords  

---

## Installation

You can run it directly using `npx`:

```bash
npx dotenv-wizard
````

Or install globally:

```bash
npm install -g dotenv-wizard
dotenv-wizard
```

---

## Usage

By default, `dotenv-wizard` looks for `.env.example` in the current directory and outputs a `.env` file:

```bash
npx dotenv-wizard
```

You can also specify custom paths:

```bash
npx dotenv-wizard --example path/to/.env.example --output path/to/.env
```

### Options

| Flag                   | Description                        | Default        |
| ---------------------- | ---------------------------------- | -------------- |
| `-e, --example <path>` | Path to `.env.example` file        | `.env.example` |
| `-o, --output <path>`  | Path for the generated `.env` file | `.env`         |

---

## Example

Given a `.env.example` like:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
```

Running `npx dotenv-wizard` will prompt:

```
Enter value for DB_HOST: localhost
Enter value for DB_USER: admin
Enter value for DB_PASS: ****
```

And generate `.env`:

```env
DB_HOST=localhost
DB_USER=admin
DB_PASS=secretpassword
```

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

MIT