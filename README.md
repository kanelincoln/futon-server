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

**Note**: You cannot view the contents of the test database (below) through Prisma Studio.

## Testing

You can run the test suite by running:

```bash
npm run test
```

**Note:** The project's `docker-compose.yml` will create two databases, one for local development and one dedicated to (automated) testing.

The test suite will automatically seed the test database with the data it needs to run any existing tests.