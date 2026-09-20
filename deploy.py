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
            
            # Check for git and node
            child.sendline('git --version')
            child.expect([r'\$ ', r'# '])
            
            # Setup repository
            child.sendline('if [ ! -d ioncoders ]; then git clone https://github.com/hezronkipchirchir/ioncoders.git; fi')
            child.expect([r'\$ ', r'# '], timeout=30)
            
            child.sendline('cd ioncoders')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('git pull')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            child.sendline('npm install')
            child.expect([r'\$ ', r'# '], timeout=120)
            
            child.sendline('npm run build')
            child.expect([r'\$ ', r'# '], timeout=120)
            
            # Try to start using pm2 if available, else nohup
            child.sendline('npx pm2 restart ioncoders || npx pm2 start npm --name "ioncoders" -- start')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            child.sendline('exit')
            child.expect(pexpect.EOF)
            print("Deployment finished successfully!")
        else:
            print("Failed to get password prompt")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == '__main__':
    deploy()
