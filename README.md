## Getting Started

First, ensure you have Docker open.

Next, run the Docker containers:

```bash
docker compose up -d
```

Next, set up the database(s) by running any necessary migrations.

Run the development server:

```bash
npm run dev
```

Check the server is running by visiting `http://localhost:4000`. You should be able to open Apollo Client's querying Sandbox from there.

You can use Prisma Studio to explore and manipulate data in your local (dev) database by running the following:

```bash
npm run studio:dev
```

(If you want to use the Studio to view/modify the test database, you can instead run `npm run studio:test`.)

**Note:** Every time you make changes to the schema and create a migration, you will need to restart the Studio to see those changes reflected.

## Testing

You will need to set up the `test` database by performing any required migrations. You can do this by running:

```bash
npm run migrate:test
```

You can then run the test suite:

```bash
npm run test
```

**Note:** The test suite will automatically seed the test database with the data it needs to run any existing tests.

## Environment Variables

The scripts in `package.json` use `dotenv-cli` to set environment variables based on the `.env` files in the project. View `package.json` to see how this works.

## Adding a space

You can add a space to the database using the addSpace.js Node script.

### Development

```bash
npm run add-space:dev path-to-data-file`
```

### Production

**Note:** Double-check the data is correct because there is no easy-to-use script for deleting the item from the production database (yet).

```bash
npm run add-space:prod path-to-data-file`
```

You should upload any images associated with the space to S3 prior to running this script. There is an example file called `exampleSpace.js` inside the `/scripts/addSpace` directory that illustrates the structure of the required data file.

## Important

* The project is deployed on Heroku. **Automatic deploys are triggered on every Git push/merge to/with `main` branch.** This includes changes to the database schema.
* If you need to add a column to a database table that already contains data, you'll need to make the column optional (through adding `?` to the schema) by creating a migration, and then create another migration that makes the column mandatory (after you've modified each row in the table to contain the now-mandatory data).