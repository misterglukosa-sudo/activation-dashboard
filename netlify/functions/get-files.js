exports.handler = async function(event, context) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Ambil dari localStorage simulasi
    const files = global.uploadedFiles || [];
    
    return {
      statusCode: 200,
      body: JSON.stringify(files)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};