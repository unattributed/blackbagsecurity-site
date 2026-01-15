# blackbagsecurity.com static site (hardened)

## goals
- defcon-style landing page
- no third-party assets or cdn dependencies
- GitHub Pages (Jekyll) deployment for www.blackbagsecurity.com
- hardened nginx tls + security headers (legacy self-hosting)

## local preview
from repo root (requires `jekyll`):
- jekyll serve --source docs
- open http://127.0.0.1:4000

## deploy (GitHub Pages)
1) Repository settings -> Pages:
   - Source: Deploy from a branch
   - Branch: main /docs
2) Custom domain: `www.blackbagsecurity.com`
3) Enforce HTTPS.
4) Keep `docs/CNAME` set to `www.blackbagsecurity.com`.
5) Ensure `docs/_config.yml` includes `.well-known` so `/.well-known/security.txt` is served.

## deploy (nginx, legacy)
1) create web root
- sudo mkdir -p /var/www/blackbagsecurity.com/public
- sudo rsync -av --delete ./docs/ /var/www/blackbagsecurity.com/public/

2) install nginx
- debian or ubuntu:
  - sudo apt update
  - sudo apt install -y nginx

3) get tls cert (letsencrypt)
- sudo apt install -y certbot python3-certbot-nginx
- sudo certbot certonly --nginx -d blackbagsecurity.com -d www.blackbagsecurity.com

4) enable site
- sudo cp ./nginx/blackbagsecurity.com.conf /etc/nginx/sites-available/blackbagsecurity.com.conf
- sudo ln -s /etc/nginx/sites-available/blackbagsecurity.com.conf /etc/nginx/sites-enabled/blackbagsecurity.com.conf

5) validate + reload
- sudo nginx -t
- sudo systemctl reload nginx

## notes
- if you enable hsts preload, ensure you really want it for the domain, including subdomains.
