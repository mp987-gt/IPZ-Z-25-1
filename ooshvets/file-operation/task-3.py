
def new_file_with_upper_case():
    with open("pg345.txt", "r", encoding="utf-8") as file:
        with open("new.file.txt", "w", encoding="utf-8") as new_file:
            text = file.read()
            isNewSentence = True
            
            for char in text:
                if isNewSentence and char.isalpha():
                    new_file.write(char.upper())
                    isNewSentence = False
                else:
                    new_file.write(char)

                if char in ".!?":
                    isNewSentence = True
        
    with open("new.file.txt","r", encoding="utf-8") as updated_file:
        updated_text = updated_file.read()
        
        return print(updated_text)
        
            

new_file_with_upper_case()  
