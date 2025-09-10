const { Client } = require("pg");

async function init() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
  });

  try {
    await client.connect();

    await client.query(`CREATE DATABASE messageboard;`);
    console.log("✅ Database 'messageboard' created");
  } catch (err) {
    if (err.code === "42P04") {
      console.log("ℹ️ Database 'messageboard' exists, skip.");
    } else {
      console.error("❌ Error creating database:", err);
    }
  } finally {
    await client.end();
  }

  const dbClient = new Client({
    user: "postgres",
    host: "localhost",
    database: "messageboard",
    password: "postgres",
    port: 5432,
  });

  try {
    await dbClient.connect();

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        username VARCHAR(100) NOT NULL,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await dbClient.query(`
      INSERT INTO messages (text, username)
      VALUES 
        ('Hi there!', 'Amando'),
        ('Hello World!', 'Charles')
      ON CONFLICT DO NOTHING;
    `);

    console.log("✅ Table 'messages' initialized with sample data");
  } catch (err) {
    console.error("❌ Error initializing table:", err);
  } finally {
    await dbClient.end();
  }
}

init();
