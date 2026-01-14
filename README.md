# blackbagsecurity.com static site (hardened)

## goals
- defcon-style landing page
- no third-party assets or cdn dependencies
- hardened nginx tls + security headers

## local preview
from repo root:
- cd site
- python3 -m http.server 8080
- open http://127.0.0.1:8080

## deploy (nginx)
1) create web root
- sudo mkdir -p /var/www/blackbagsecurity.com/public
- sudo rsync -av --delete ./site/ /var/www/blackbagsecurity.com/public/

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
