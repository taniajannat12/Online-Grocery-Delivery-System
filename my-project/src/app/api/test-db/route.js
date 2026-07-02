import { MongoClient } from "mongodb";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export async function GET() {
  try {
    console.log("DNS Servers:", dns.getServers());

    const client = new MongoClient(process.env.MONGODB_URI);

    await client.connect();

    return Response.json({ message: "Connected!" });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        name: err.name,
        message: err.message,
      },
      { status: 500 }
    );
  }
}