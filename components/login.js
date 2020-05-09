import  LoginTemplate  from "../templates/login-template.js";
import { base_url} from "../global.js";

const Login = {
	template: LoginTemplate,

	data() {
		return {
			user: { email: '', password: ''}
			
		}
	},

	methods: {
		
		login(){
			const self = this;
			const url = base_url+"api/login"

			axios.post(url,this.user)
			.then(function (response) {
				console.log(response);
				const updateToken  = "Bearer "+response.data.access_token
				localStorage.setItem("token", updateToken);
				localStorage.setItem("idUser", response.data.user.id);
				// localStorage.setItem("idOrg", response.data.user.id);
				// localStorage.setItem("idBranch", response.data.user.id);
				// localStorage.setItem("idUserRole", response.data.user.id);
				// localStorage.setItem("idDeviceLocation", response.data.user.id);
				self.$router.push({name: "Dashboard"});

			})
			.catch(function (error) {
				console.log(error);
				console.log('error');
			});


		}
	},
}


export { Login }

