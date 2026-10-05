# Maharshi Vyas Portfolio

A fast React portfolio with an Express contact API backed by MongoDB.

## Project structure

```text
portfolio/
├── client/                 # React + Vite + Tailwind site
│   ├── public/
│   │   ├── images/
│   │   └── Maharshi_Vyas_Resume.pdf
│   └── src/
└── server/                 # Express + Mongoose API
```

## Run locally

Use two terminals.

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Set `VITE_API_URL=http://localhost:5000` in `client/.env`. Set `MONGODB_URI`, `CLIENT_URL=http://localhost:5173`, and optionally `PORT=5000` in `server/.env`.

## Add assets

Put these files in `client/public` before deployment:

```text
public/Maharshi_Vyas_Resume.pdf
public/images/profile.jpg                 # optional
public/images/nebula-cover.png
public/images/orbitx-cover.png
```

The site deliberately hides the profile image if it cannot load. Project cover images use an accessible neutral fallback while the files are absent.

## MongoDB Atlas

1. Create an Atlas project and free cluster.
2. Create a database user with a strong password.
3. Add your development IP address to Network Access; add Render's access range or temporarily allow access from anywhere only if needed for deployment.
4. Copy the Node.js connection string, replace the password and database name, and use it as `MONGODB_URI`.

## Deploy

### Vercel (client)

1. Import this repository in Vercel and set the root directory to `client`.
2. Use build command `npm run build` and output directory `dist`.
3. Add `VITE_API_URL` with the public Render API URL (for example, `https://your-api.onrender.com`).
4. Deploy. Set the same Vercel URL as `CLIENT_URL` on Render.

### Render (server)

1. Create a Web Service from this repository with root directory `server`.
2. Use build command `npm install` and start command `npm start`.
3. Add `MONGODB_URI` and `CLIENT_URL` (the exact deployed Vercel origin). Render supplies `PORT`; do not override it there.
4. Deploy and confirm `https://your-api.onrender.com/api/health` returns `{ "ok": true }`.

## Environment variables

| Location | Variable | Purpose |
| --- | --- | --- |
| `client/.env` | `VITE_API_URL` | Public base URL of the API |
| `server/.env` | `MONGODB_URI` | MongoDB Atlas connection string |
| `server/.env` | `CLIENT_URL` | Exact Vercel site origin allowed by CORS |
| `server/.env` | `PORT` | Local API port; defaults to 5000 |

Never commit `.env` files or a database connection string.
