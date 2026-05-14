import asyncio

async def delay(delayInSeconds):
    print("Start")
    
    await asyncio.sleep(delayInSeconds)
    
    print("End")
    
try:
    asyncio.run(delay(0))
except:
    print("An error occurred")