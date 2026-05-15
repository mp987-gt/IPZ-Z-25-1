import asyncio

async def delay(delayInSeconds):
    print("Start")
    await asyncio.sleep(delayInSeconds)
    print("End")
    
asyncio.run(delay(5))