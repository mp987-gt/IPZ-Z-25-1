import bcrypt
import os
password = input("ENTER YOUR PASSWORD: ").encode()

hashed = bcrypt.hashpw(password, bcrypt.gensalt())
            
def save_or_check_password(password, hashed):
    
    if os.path.isfile("passwords.txt"): 
        check_match_or_add(password, hashed)
    else:
        with open("passwords.txt", "wb") as add_pass:
            add_pass.write(hashed)
            
            print("Added")
    
        
def check_match_or_add(password, hashed):
    
    with open("passwords.txt", "rb") as check_pass:
        added_password = check_pass.read()
        
    if len(added_password) > 0:
        if bcrypt.checkpw(password, added_password):
            print("Match")
        else:
            print("No match found")
    else:
       with open("passwords.txt", "wb") as add_pass:
            add_pass.write(hashed)
        
            print("Added")


save_or_check_password(password, hashed)