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
			let self = this;
			let hello = base_url+"api/login"
			console.log(hello);
			axios.post(hello, this.user).then(function(response){
			console.log(response.data.access_token);
			const updateToken  = "Bearer "+response.data.access_token
			localStorage.setItem("token", updateToken);
			self.$router.push({name: "Dashboard"});
			
		})
		
		}
	},
}


export { Login }

