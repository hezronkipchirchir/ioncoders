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
            
            child.sendline('cd ioncoders')
            child.expect([r'\$ ', r'# '])
            
            child.sendline('nohup npm start > app.log 2>&1 &')
            child.expect([r'\$ ', r'# '], timeout=10)
            
            child.sendline('exit')
            child.expect(pexpect.EOF)
            print("App started successfully!")
        else:
            print("Failed to get password prompt")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == '__main__':
    deploy()
