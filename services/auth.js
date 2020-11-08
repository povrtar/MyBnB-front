import { RestBnB } from '../apis/RestBnB';


export const login = async function (credentials) {
  try {
    let response = await RestBnB.post("/users/login", credentials);
    let token = response.data;

    console.log(token);
    window.localStorage.setItem("token", token);
    this.history.push("/apartments");
    window.location.reload();
  } catch (error) {
    alert("Could not log in.");
  }
};
export const signIn = async function (credentials) {
  try {
    let response = await RestBnB.post("/users/signIn", credentials);
    let token = response.data;

    console.log(token);
    window.localStorage.setItem("token", token);
    this.history.push("/apartments");
    window.location.reload();
  } catch (error) {
    alert("Could not sign  in.");
  }
};

export const logout = function(){
    window.localStorage.removeItem("token");
    window.location.reload();
}
