import os
import webbrowser
import subprocess

# Path to your project
project_dir = os.path.abspath(os.getcwd())

# Start the Python HTTP server
subprocess.Popen(["python", "-m", "http.server", "8000"], cwd=project_dir)

# Open the browser
webbrowser.open("http://localhost:8000")