import jwtDecode from "jwt-decode";
const { default: GenericService } = require("./GenericService");
class UserSerice extends GenericService {
    constructor() {
        super();
    }
    login = (email, password) =>
        new Promise((resolve, reject) => {
            this.post("api/users/login", { email, password })
                .then((token) => {
                    localStorage.setItem("token", token);
                    resolve(token);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    register = (email, password, name) =>
        this.post("api/users/register", { email, password, name });

    logout = () => {
        localStorage.removeItem("token");
    };
    isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };
    getLoggedInUser = () => {
        try {
            const jwt = localStorage.getItem("token");
            return jwtDecode(jwt);
        } catch (ex) {
            return null;
        }
    };
    isAdmin = () => {
        if (this.isLoggedIn()) {
            if (this.getLoggedInUser().role == "admin") {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
}
let userService = new UserSerice();
export default userService;