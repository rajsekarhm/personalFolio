import http from 'http'
import fs from 'fs';
import path from "path"
import { Base64ImageConverter } from './ImageConverter';
function getAllContent(){
   
    var options = {
        'method': 'GET',
        'hostname': '127.0.0.1',
        'port': 8080,
        'path': '/api/v1/files/getAllContent/voyage-personalsite',
        'headers': {
          'Cookie': 'JSESSIONID=57227C0C86D48801C93BE88F58EBEC5E'
        },
        'maxRedirects': 20
      };
      
      var req = http.request(options, function (res:any) {
        var chunks:Array<any> = [];
        const fileStream = fs.createWriteStream(path.resolve("./","imageFolder.txt"));
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
        });
    
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
        });
      
        res.on("error", function (error) {
          console.error(error);
        });
      });
      
      req.end();

    const imagePath = path.resolve("./","imageFolder.txt")
    const outputImageFolderPath = path.resolve("./","imageFolderOutput")
    ! fs.existsSync(outputImageFolderPath) &&fs.mkdir(outputImageFolderPath,()=>{})
    var imageContent = fs.readFileSync(imagePath,'utf-8')
    imageContent = JSON.parse(imageContent)
    console.log("imageContent",imageContent.length)
    imageContent.forEach(async (ele,index) => {
        console.log("index",index)
        const result = await Base64ImageConverter.saveBase64Image(
            ele,
            outputImageFolderPath,
            `image-${index}.jpg`
          );
    })

}

export default getAllContent;