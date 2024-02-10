// Fetch request using fetch
const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ key1: 'val1', key2: 'val2' })

}
fetch(url, options)


// Fetch request using axious

//For GET
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_access_token'
};

// Define your request body
const requestBody = {
    key1: 'value1',
    key2: 'value2'
};

// Make a GET request with headers and request body
axios.get('https://example.com/api/data', {
    headers: headers,
    params: requestBody // For GET requests, use params
})

// For POST
axios.post('https://example.com/api/data', requestBody, {
  headers: headers
})
