## Getting Started

First, ensure you have Docker open.

Next, run the Docker containers:

```bash
docker compose up -d
```

Next, run the development server:

```bash
npm run dev
```

Check the server is running by visiting `http://localhost:4000`. You should be able to open Apollo Client's querying Sandbox from there.

You can use Prisma Studio to explore and manipulate data in your local database by running:

```bash
npx prisma studio
```