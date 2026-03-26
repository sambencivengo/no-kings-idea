export async function onRequestGet({ env }) {
  await env.DB.exec(`CREATE TABLE IF NOT EXISTS clicks (id INTEGER PRIMARY KEY, count INTEGER DEFAULT 0)`);
  await env.DB.exec(`INSERT OR IGNORE INTO clicks (id, count) VALUES (1, 0)`);
  const row = await env.DB.prepare(`SELECT count FROM clicks WHERE id = 1`).first();
  return Response.json({ count: row.count });
}
