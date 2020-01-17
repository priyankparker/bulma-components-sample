// const date = new Date()
// date //?
// const before = 1578352920543
// const now = Date.now()

// const secondsDiff = (now - before) / 1000 

// secondsDiff

const fsPromises = require('fs').promises;
async function openAndClose() {
    let filehandle;
    try {
        filehandle = await fsPromises.open('thefile.txt', 'r');
    } catch (e) {
        console.log('File handling error: ', e)
    } finally {
        if (filehandle !== undefined)
            await filehandle.close();
    }
}

openAndClose()

