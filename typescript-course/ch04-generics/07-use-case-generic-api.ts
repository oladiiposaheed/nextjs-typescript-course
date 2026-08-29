// 07-use-case-generic-api.ts
// Real-life: Generic API client

// Define shapes
interface ProductItem {
  id: number;
  name: string;
  price: number;
}

interface UserItem {
  id: number;
  name: string;
  email: string;
}

// Generic fetch function
// <T> means it can return any type
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json(); // parse JSON
    return data as T;                   // return as type T
}

// Use with ProductItem
async function getProduct() {
    const product = await fetchData<ProductItem>('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Product title: ' + product.name)
}

// Use with UserItem
async function getUser() {
  const user = await fetchData<UserItem>('https://jsonplaceholder.typicode.com/users/1');
  console.log('User: ' + user.name);
  console.log('Email: ' + user.email);
}

// Call functions
getProduct();
getUser();