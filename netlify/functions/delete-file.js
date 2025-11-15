exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { filename } = JSON.parse(event.body);
    
    // Hapus dari localStorage simulasi
    if (global.uploadedFiles) {
      global.uploadedFiles = global.uploadedFiles.filter(f => f.filename !== filename);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        source: 'cloud'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};