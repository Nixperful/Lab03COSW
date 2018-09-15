import axios from "axios";




const client = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 1000000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
}); 


  export function getTodos(callback) {
    client.get("/api/todos").then(function (response) {
      callback.onSuccess(response);
    })
    .catch(function (error) {
      callback.onFailed(error);
    });
  }

  export function addNewTodo(callback, todo) {
      client.post("/api/todos", todo)
      .then(function () {
        callback.onSuccess();
      })
      .catch(error => console.log(error));
  }
