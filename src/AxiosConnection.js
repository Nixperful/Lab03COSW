import axios from "axios";




const client = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
}); 


  export function getTodos(callback) {
    client.get("/todos").then(callback);
  }

  export function addNewTodo(todo, callback) {
      client.post("", { todo })
      .then(callback)
      .catch(error => console.log(error));
  }
