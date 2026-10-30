// ==========================================
// Concept 7.3: POST Requests
// Location: app/api/students/route.ts
// ==========================================

// THE RULE:
// A POST request receives data in the 'request.body'. 
// You must use 'await request.json()' to read it.
// You should always validate the data before saving it.
// Return a 201 status code when something is successfully created.