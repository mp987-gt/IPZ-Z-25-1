import os
from pathlib import Path

def return_files_from_parent_dir():
    
    print(os.listdir(Path.cwd().parent))

return_files_from_parent_dir()