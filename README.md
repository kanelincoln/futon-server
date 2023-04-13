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

**Note:** Every time you make changes to the schema and create a migration, you will need to restart the Studio to see those changes reflected.

## Testing

You can run the test suite by running:

```bash
npm run test
```

**Note:** The project's `docker-compose.yml` will create two databases, one for local development and one dedicated to (automated) testing.

The test suite will automatically seed the test database with the data it needs to run any existing tests.

## Important

* The project is deployed on Heroku. Automatic deploys are triggered on every Git push/merge to/with `main` branch. This includes changes to the database schema.
* If you need to add a column to a database table that already contains data, you'll need to make the column optional (through adding `?` to the schema) by creating a migration, and then create another migration that makes the column mandatory (after you've modified each row in the table to contain the now-mandatory data). 