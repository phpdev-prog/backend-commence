const fs = require('fs')
// sync..
// fs.writeFileSync('./text.txt', 'Hey there')

// Async

// fs.writeFile('./text.txt', 'Hello again', err => {
//   if (err) throw err
//   console.log('The file has been saved!')
// })

// read

// const rs =fs.readFileSync('./contacts.txt', "utf-8")

// console.log(rs)

// Async

// fs.readFile('./contacts.txt', "utf-8" , (err,res)=>{
//     if(err) throw err
//     console.log(res)
// })


// fs.appendFileSync('./test.txt', `${Date.now()}hey there\n`)
// copy

// fs.cpSync('./test.txt','./copy.txt')


// delete

// fs.unlinkSync('./test.txt')
// 
// console.log(fs.statSync('./text.txt'))


// fs.mkdirSync("my-docs/a/b", {recursive: true})

// Example : log system - 
