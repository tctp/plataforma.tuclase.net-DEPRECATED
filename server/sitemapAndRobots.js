const sm = require('sitemap')
const glob = require('glob')
const fs = require('fs')

const sitemap = sm.createSitemap({
  hostname: 'https://plataforma.tuclase.net',
  cacheTime: 600000 // 600 sec - cache purge period
})

const setup = ({ server }) => { 

  glob("out/**/*.html", function (er, files) {    
    files.forEach((file, index) => {          
      sitemap.add({
        url: `${file.replace('out/', '')}`,
        changefreq: 'daily',
        priority: 0.9
      })      
    })

    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end()
        return
      }
      fs.writeFileSync('out/sitemap.xml', xml);
    })

    fs.readFile('static/robots.txt', 'utf8', function (err, data) {
      if (err) throw err;
      console.log(data);
      fs.writeFileSync('out/robots.txt', data);
    });
  })


//   glob("pages/es-cl/**", function (er, paths) {
//     console.log("paths", paths);
//     let sistemas = new Set();
    
//     let fileSystemRutas = {
//       'idioma':'es-cl',
//       'sistemas':[
//           {
//             nombre:undefined,
//             roles:[]
//           }
//       ] 
//     };

//     paths.forEach(path => {      
//       let levels = path.split("/");
//       console.log("levels", levels);
//       let file = levels.pop();  
//       sistemas.add(levels[2]);          
//     });

//     sistemas.forEach((sistema)=>{

//     })


//     console.log("sistemas", sistemas);


//   })
}

module.exports = setup







// const setup = ({ server }) => {
//   glob("pages/**/*.mdx", function (er, files) {
//     files.forEach((file, index) => {
//       sitemap.add({
//         url: `${file}`,
//         changefreq: 'daily',
//         priority: 0.9
//       })
//     })
//   })

//   server.get('/sitemap.xml', (req, res) => {
//     sitemap.toXML((err, xml) => {
//       if (err) {
//         res.status(500).end()
//         return
//       }
//       res.header('Content-Type', 'application/xml')
//       fs.writeFileSync('out/sitemap.xml', xml);
//       res.send(xml)
//     })

//     fs.readFile('static/robots.txt', 'utf8', function (err, data) {
//       if (err) throw err;
//       console.log(data);
//       fs.writeFileSync('out/robots.txt', data);
//     });

//   })
// }