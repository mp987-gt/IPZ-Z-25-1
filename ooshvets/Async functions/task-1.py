input = "ers2"

def convert(input, callback):
    if input.isdigit() :
        callback(None, int(input))
    else:
        callback("Invalid input", None)

def result(error, data):
    if error:
        print("Invalid input")
    else:
        print(data)

convert(input, result)