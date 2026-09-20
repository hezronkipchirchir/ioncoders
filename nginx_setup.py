import pexpect
import sys

def run_nginx_setup():
    print("Starting SSH session for Nginx setup...")
    child = pexpect.spawn('ssh -o StrictHostKeyChecking=no hezron@10.203.69.203', encoding='utf-8')
    child.logfile = sys.stdout
    
    try:
        index = child.expect(['password:', 'Password:', pexpect.EOF, pexpect.TIMEOUT], timeout=10)
        if index in [0, 1]:
            child.sendline('Moonlight')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Update and install nginx using echo password to sudo
            child.sendline('echo "Moonlight" | sudo -S apt-get update')
            child.expect([r'\$ ', r'# '], timeout=60)
            
            child.sendline('echo "Moonlight" | sudo -S apt-get install -y nginx')
            child.expect([r'\$ ', r'# '], timeout=60)
            
            # Write Nginx configuration
            nginx_conf = """server {
    listen 80;
    server_name _;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}"""
            
            # Write to temp file
            child.sendline("cat << 'NGINX_EOF' > /tmp/ioncoders_nginx\n" + nginx_conf + "\nNGINX_EOF")
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Move to sites-available
            child.sendline('echo "Moonlight" | sudo -S mv /tmp/ioncoders_nginx /etc/nginx/sites-available/ioncoders')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Remove default site
            child.sendline('echo "Moonlight" | sudo -S rm -f /etc/nginx/sites-enabled/default')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Enable new site
            child.sendline('echo "Moonlight" | sudo -S ln -sf /etc/nginx/sites-available/ioncoders /etc/nginx/sites-enabled/')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Test configuration
            child.sendline('echo "Moonlight" | sudo -S nginx -t')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Restart Nginx
            child.sendline('echo "Moonlight" | sudo -S systemctl restart nginx')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            # Open port 80 on firewall
            child.sendline('echo "Moonlight" | sudo -S ufw allow 80/tcp')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            child.sendline('exit')
            child.expect(pexpect.EOF)
            print("Nginx Setup finished successfully!")
        else:
            print("Failed to get password prompt")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == '__main__':
    run_nginx_setup()
