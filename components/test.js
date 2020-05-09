import  TestTemplate  from "../templates/test-template.js";
import { base_url} from "../global.js";


const Test = {
	template: TestTemplate,

	mounted:function (){
		this.get()

	},
	

	methods: {		
		
		get(){
			const self = this;
			const url = base_url+"api/users"
			axios.get(url)
			.then(function (response) {				
				console.log('stay login',response)
    			//Dashboard redirect

    		})
			.catch(function (error) {
				if(error.message == 'Request failed with status code 401'){
					console.log('confirm logout')
    				//Login Page redirect
    				return null
    			}
    			console.log('Error msg show',error)

    		});


		}
	}
	
}


export { Test }

