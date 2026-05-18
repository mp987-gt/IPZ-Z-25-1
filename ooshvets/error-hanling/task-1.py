input = "11"

def convert(input, callback):
    try:
        callback(None, int(input))
    except:
        callback("Invalid input", None)

def result(error, data):
    if error:
        print("Invalid input")
    else:
        print(data)

convert(input, result)