# Nginx Configuration for KabonShare Landing

## Setup Instructions

### 1. Copy the Nginx Configuration

The `nginx.conf` file in this project contains the server configuration. You need to add it to your Nginx setup.

**Option A: Include in main nginx.conf**
```bash
sudo nano /etc/nginx/sites-available/kabonshare-landing
```

Paste the contents of `nginx.conf` and adjust the `root` path if needed.

**Option B: Use the provided config directly**
```bash
sudo cp nginx.conf /etc/nginx/sites-available/kabonshare-landing
sudo ln -s /etc/nginx/sites-available/kabonshare-landing /etc/nginx/sites-enabled/
```

### 2. Update the Root Path

Make sure the `root` directive points to your `out` folder:
```nginx
root /var/www/kabonshare_landing/out;
```

### 3. Update Server Name

Change the `server_name` to match your domain:
```nginx
server_name kabonshare.com www.kabonshare.com;
```

### 4. Test Nginx Configuration

```bash
sudo nginx -t
```

### 5. Reload Nginx

```bash
sudo systemctl reload nginx
```

## Key Configuration Points

1. **Trailing Slashes**: Redirects URLs without trailing slashes to include them (matches Next.js export)
2. **Try Files**: Attempts to serve files in this order:
   - Exact file match
   - Directory
   - Directory with index.html
   - Fallback to root index.html
3. **Static Assets**: Long cache times for `_next/static/` files
4. **404 Handling**: Serves the custom 404 page

## Troubleshooting

If pages still redirect to homepage:

1. **Check Nginx error logs**:
   ```bash
   sudo tail -f /var/www/kabonshare_landing/out
   ```

2. **Verify file structure** in out folder:
   ```
   out/
   ├── index.html
   ├── pricing/
   │   └── index.html
   ├── privacy/
   │   └── index.html
   └── terms/
       └── index.html
   ```

3. **Check permissions**:
   ```bash
   sudo chown -R www-data:www-data /var/www/kabonshare_landing/out
   sudo chmod -R 755 /var/www/kabonshare_landing/out
   ```

4. **Test a specific file**:
   ```bash
   curl -I http://kabonshare.com/pricing/
   ```

## SSL Configuration (Optional)

To add HTTPS with Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d kabonshare.com -d www.kabonshare.com
```
