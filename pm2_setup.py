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
            
            child.sendline("pkill -f 'npm start'")
            child.expect([r'\$ ', r'# '])
            
            child.sendline('sudo npm install -g pm2')
            index_sudo = child.expect(['password', r'\$ ', r'# '], timeout=10)
            if index_sudo == 0:
                child.sendline('Moonlight')
                child.expect([r'\$ ', r'# '], timeout=60)
            
            child.sendline('cd ioncoders')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('pm2 delete ioncoders || true')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('pm2 start npm --name "ioncoders" -- start')
            child.expect([r'\$ ', r'# '], timeout=20)
            
            child.sendline('pm2 save')
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
