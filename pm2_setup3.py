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
            
            child.sendline("pkill -f 'npm start' || true")
            child.expect([r'\$ ', r'# '])
            
            child.sendline('cd ioncoders')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('npx -y pm2 delete ioncoders || true')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('npx -y pm2 start npm --name "ioncoders" -- start')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('npx -y pm2 delete tunnel || true')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('npx -y pm2 start npx --name "tunnel" -- localtunnel --port 3000')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('sleep 5 && npx -y pm2 logs tunnel --nostream --lines 15')
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
