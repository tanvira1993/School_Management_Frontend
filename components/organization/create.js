import  OrganizationCreateTemplate  from "../../templates/organization-templates/create-template.js";
import { base_url} from "../../global.js";


const OrganizationCreate = {
	template: OrganizationCreateTemplate,

	data() {
		
		return {
			organization: {
				title : ''
			}
		}
	},

	methods: {
		submit(){
			axios.post("http://127.0.0.1:8000/api/organization",this.organization).then(function (response) {
				console.log(response);
			});
		},

		test(){
			axios.post("http://127.0.0.1:8000/api/post", {title: "test title a", body: "test Body s"}).then( function(res){
				console.log(res.data)
			});
		}
	},
	
}


export { OrganizationCreate }

