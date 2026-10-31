import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Nginx listens on port 8080 and reverse-proxies to port 3000.
// When Cloud Run sets PORT=8080, the node server must bind to port 3000 to avoid EADDRINUSE conflict with Nginx.
const PORT = process.env.PORT && process.env.PORT !== '8080' ? Number(process.env.PORT) : 3000;

app.use(express.json());

// Health check endpoint for Cloud Run and monitoring
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Handle contact inquiries
app.post('/api/contact', (req, res) => {
  const { name, email, service, budget, message } = req.body;
  console.log(`[Contact Form Received] From: ${name} (${email}), Service: ${service}, Budget: ${budget}`);
  if (message) {
    console.log(`[Details]: ${message}`);
  }
  res.json({ success: true, message: 'Inquiry received successfully' });
});

async function startServer() {
  const distPath = path.resolve(__dirname, 'dist');
  const isProduction = process.env.NODE_ENV === 'production' || fs.existsSync(distPath);

  if (isProduction && fs.existsSync(distPath)) {
    console.log(`Serving static production files from: ${distPath}`);
    app.use(express.static(distPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    console.log('Starting Vite in middleware mode for development...');
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
