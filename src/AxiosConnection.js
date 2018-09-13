import axios from "axios";


const client = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
});

class AxiosConnection {
  static login(user, pass) {
    return axios.post("http://localhost:8080/user/login", {
      username: user,
      password: pass
    });
  }

  static getByAuthor(callback) {
    client.get("/todos").then(callback);
  }

  static putNewTodo(todo, callback) {
    client
      .post("", { todo })
      .then(callback)
      .catch(error => console.log(error));
  }
}

export default AxiosConnection;