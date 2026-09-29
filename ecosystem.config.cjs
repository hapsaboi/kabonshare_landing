// PM2 process definition for the marketing site.
//
// `interpreter` is pinned deliberately. This app was started from the CLI with
// no config, so PM2 recorded `/usr/bin/node` — v18 on the production box, while
// everything else runs 24. Next 14 tolerates 18, so nothing is broken today;
// the risk is the next dependency that needs modern Node, which would fail at
// startup with no obvious cause.
//
// Two traps worth knowing before changing this file:
//   - `pm2 restart` reuses the interpreter a process was ORIGINALLY started
//     with, so a restart cannot apply a change here. Use
//     `pm2 delete kabonshare_landing && pm2 start ecosystem.config.cjs`.
//   - `pm2 list` reports the PM2 DAEMON's Node version, not each child's. The
//     honest check is `readlink /proc/<pid>/exe`.
//
// This cost an outage on the backend: Node 18 cannot parse the
// `with { type: 'json' }` import attributes a dependency used, the worker died
// with "SyntaxError: Unexpected token 'with'" and the API 502'd — while
// `pm2 list` cheerfully reported 24.11.0.
const NODE = '/root/.nvm/versions/node/v24.11.0/bin/node';

module.exports = {
  apps: [
    {
      name: 'kabonshare_landing',
      // Run Next's binary directly rather than `npm start`, so PM2 supervises
      // the server process itself instead of an npm wrapper that forwards
      // signals imperfectly.
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/kabonshare_landing',
      interpreter: NODE,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        // 3002 is what nginx proxies to — see the proxy_pass in
        // /etc/nginx/sites-available/kabonshare_landing. Changing it here
        // without changing nginx takes the marketing site down.
        PORT: 3002,
      },
    },
  ],
};
