const { BlobServiceClient } = require('@azure/storage-blob');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { filename, data, timestamp } = JSON.parse(event.body);
    
    // Simpan ke localStorage simulasi (dalam production, gunakan database sesungguhnya)
    // Di sini kita akan menggunakan variable global sebagai simulasi
    if (!global.uploadedFiles) {
      global.uploadedFiles = [];
    }
    
    const fileData = {
      filename,
      data,
      timestamp,
      id: Date.now().toString()
    };
    
    global.uploadedFiles.push(fileData);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        source: 'cloud',
        file: fileData
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};