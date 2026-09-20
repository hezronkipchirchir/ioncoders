import pexpect
import sys

def deploy():
    print("Starting SSH session...")
    child = pexpect.spawn('ssh -o StrictHostKeyChecking=no hezron@10.203.69.203', encoding='utf-8')
    child.logfile = sys.stdout
    
    try:
        index = child.expect(['password:', 'Password:', pexpect.EOF, pexpect.TIMEOUT], timeout=10)
        if index in [0, 1]:
            child.sendline('Moonlight')
            child.expect([r'\$ ', r'# ', r'> '], timeout=10)
            
            # Setup repository
            child.sendline('if [ ! -d ioncoders ]; then git clone https://github.com/hezronkipchirchir/ioncoders.git; fi')
            child.expect([r'\$ ', r'# '], timeout=30)
            
            child.sendline('cd ioncoders')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('git pull origin main')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('npm install')
            child.expect([r'\$ ', r'# '], timeout=180)
            
            child.sendline('npm run build')
            child.expect([r'\$ ', r'# '], timeout=180)
            
            # Try to start using pm2 if available, else nohup
            child.sendline('npx pm2 restart ioncoders || npx pm2 start npm --name "ioncoders" -- start')
            child.expect([r'\$ ', r'# '], timeout=30)
            
            child.sendline('exit')
            child.expect(pexpect.EOF)
            print("Deployment finished successfully!")
        else:
            print("Failed to get password prompt")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == '__main__':
    deploy()
