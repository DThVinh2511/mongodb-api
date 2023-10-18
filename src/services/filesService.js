const path = require('path');

const uploadSingleFile = async (fileOject) => {
  // sampleFile = req.files.sampleFile;
  uploadPath = path.resolve(__dirname, "../public/images/upload");


  let extName = path.extname(fileOject.name);
  let baseName = path.basename(fileOject.name, extName)

  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;
  // Use the mv() method to place the file somewhere on your server
  try {
    await fileOject.mv(finalPath);
    return {
      status: 'success',
      path: finalName,
      error: null
    }
  } catch (err) {
    return {
      status: 'failed',
      path: null,
      error: JSON.stringify(err)
    }
  }
}

const uploadMultipleFile = async (filesArray) => {
  try {
    uploadPath = path.resolve(__dirname, "../public/images/upload");
    let results = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArray.length; i++) {
      let extName = path.extname(filesArray[i].name);
      let baseName = path.basename(filesArray[i].name, extName)

      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;
      console.log('check finalName: ', finalName);
      console.log('check finalpath: ', finalPath);
      try {
        await filesArray[i].mv(finalPath);
        results.push({
          status: 'success',
          path: finalName,
          fileName: filesArray[i].name,
          error: null
        })
        countSuccess++;
      } catch (err) {
        results.push({
          status: 'failed',
          path: null,
          fileName: filesArray[i].name,
          error: JSON.stringify(err)
        })
      }
    }
    return {
      countSuccess: countSuccess,
      detail: results
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  uploadMultipleFile,
  uploadSingleFile
}