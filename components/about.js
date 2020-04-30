import  about  from "../templates/about-template.js";


const About = {
	template: about,
	mounted(){
		this.selfCall();
	},
	methods:{
		selfCall(){
			console.log("from about");
		},
		hello(){
			console.log('hello click function')
		}
	},
	
}


export { About }

