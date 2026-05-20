def read_and_count():
    
    with open("pg345.txt") as file:
        text = file.read()
        words = text.split()
        words_count = len(words)   
        
        print(words_count)
        
        
read_and_count()