// ÖDEV 1
//node file1.js 3

// let yaricap = process.argv[2];
// yaricap = Number(yaricap);

// let alan = Math.PI * yaricap + yaricap;

// console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);

//
//
//

// ÖDEV 2
// Kodu direk çalıştırabilirsiniz
// const posts = [
//     { id: 1, postName: 'Post 1', message: 'İlk mesaj' },
//     { id: 2, postName: 'Post 2', message: 'İkinci mesaj' },
//     { id: 3, postName: 'Post 3', message: 'Üçüncü mesaj' }
// ];

// const postList = () => {
//     console.table(posts);
// };

// const addPost = (newPost) => {
//     return new Promise((resolve, reject) => {
//         if (newPost) {
//             posts.push(newPost);
//             resolve(posts);
//         } else {
//             reject('Post not Added');
//         }
//     });
// };

// async function getPostList() {
//     try {
//         await addPost({ id: 4, postName: "Post 4", message: "Dördüncü mesaj" });
//         postList();
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPostList();

//
//
//

// ÖDEV 3
// import { circleArea, circleCircumference } from './circle.js';
// circleArea(5)
// circleCircumference(5)

//
//
//

// ÖDEV 4
// CRUD işlemlerini tek tek çalıştırın

// import { writeFile, readFile, unlink } from 'fs/promises';

// CREATE
// let employees = { "name": "Employee 1 Name", "salary": 2000 };
// await writeFile('employees.json', JSON.stringify(employees), 'utf8');

// READ
// let data = await readFile('employees.json', 'utf8');
// employees = JSON.parse(data);
// console.log(employees);

// UPDATE
// employees.salary = 3000;
// await writeFile('employees.json', JSON.stringify(employees), 'utf8');

// DELETE
// await unlink('employees.json');

//
//
//

// ÖDEV 5

// import http from 'http';

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case '/':
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write('<h2>Index sayfasına hoşgeldiniz</h2>');
//             break;
//         case '/hakkimda':
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write('<h2>Hakkımda sayfasına hoşgeldiniz</h2>');
//             break;
//         case '/iletisim':
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write('<h2>İletişim sayfasına hoşgeldiniz</h2>');
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.write('<h2>Sayfa bulunamadı</h2>');
//             break;
//     }
//     res.end();
// });

// const port = 5000;
// server.listen(port, () => {
//     console.log(`Sunucu http://localhost:${port} adresinde başlatıldı`);
// });

//
//
//

// ÖDEV 6
// TESTING