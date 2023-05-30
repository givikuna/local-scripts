import os
import subprocess

os.chdir('spiderfoot-4.0')
subprocess.run('python3 ./sf.py -l 127.0.0.1:5001'.split())
