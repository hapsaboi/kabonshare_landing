# Fix for Current Nginx Configuration

Replace your current Nginx config with this:

```nginx
server {
    listen 443 ssl http2;
    server_name kabonshare.com www.kabonshare.com;

    root /var/www/kabonshare_landing/out;
    index index.html;

    # Handle trailing slashes - redirect to trailing slash
    rewrite ^([^.]*[^/])$ $1/ permanent;

    # Main location block with proper try_files for Next.js static export
    location / {
        try_files $uri $uri/ $uri/index.html /index.html;
    }

    # Cache static assets from Next.js
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache other static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/kabonshare.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kabonshare.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss;
}

server {
    listen 80;
    server_name kabonshare.com www.kabonshare.com;

    return 301 https://$host$request_uri;
}
```

## Apply the fix:

```bash
# Edit your config
sudo nano /etc/nginx/sites-available/kabonshare-landing

# Test the configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Key Changes:

1. **`try_files $uri $uri/ $uri/index.html /index.html;`** - Properly handles:
   - `/pricing` → tries `/pricing/index.html`
   - `/privacy` → tries `/privacy/index.html`
   - Falls back to root `/index.html` if not found

2. **`rewrite ^([^.]*[^/])$ $1/ permanent;`** - Adds trailing slashes to URLs (matches Next.js export)

3. **Added caching** for static assets to improve performance

4. **Added `http2`** to SSL listener for better performance
