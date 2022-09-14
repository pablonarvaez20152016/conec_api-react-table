
export default async function FetchUsers(page) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await response.json();
    return json;
  }
