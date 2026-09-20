import pexpect
import sys

def pm2_setup():
    print("Starting SSH session...")
    child = pexpect.spawn('ssh -o StrictHostKeyChecking=no hezron@10.203.69.203', encoding='utf-8')
    child.logfile = sys.stdout
    
    try:
        index = child.expect(['password:', 'Password:', pexpect.EOF, pexpect.TIMEOUT], timeout=10)
        if index in [0, 1]:
            child.sendline('Moonlight')
            child.expect([r'\$ ', r'# ', r'> '], timeout=10)
            
            # Kill existing instances safely
            child.sendline("pkill -f 'npm start' || true")
            child.expect([r'\$ ', r'# '])
            
            # Navigate to project
            child.sendline('cd ioncoders')
            child.expect([r'\$ ', r'# '])
            
            # Start pm2 locally via npx to avoid sudo
            child.sendline('npx pm2 delete ioncoders || true')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('npx pm2 start npm --name "ioncoders" -- start')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            # Expose via localtunnel
            # We use pm2 to run localtunnel as well so it stays running
            child.sendline('npx pm2 delete tunnel || true')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('npx pm2 start npx --name "tunnel" -- localtunnel --port 3000')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            # Wait a sec for the tunnel to generate a URL, then get the logs to find the URL
            child.sendline('sleep 5 && npx pm2 logs tunnel --nostream --lines 10')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('exit')
            child.expect(pexpect.EOF)
            print("PM2 Setup finished successfully!")
        else:
            print("Failed to get password prompt")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == '__main__':
    pm2_setup()
