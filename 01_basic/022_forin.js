const myobject = {
    js: 'javascript',
    HTML:'hyper text markup lan',
    py:'python'                      
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`)
    }