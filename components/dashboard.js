import { DashboardTemplate } from '../templates/dashboard-template.js'

const Dashboard = {
  template: DashboardTemplate,

  methods: {
    logout(){
      let self = this;
      axios.get('http://127.0.0.1:8000/api/logout').then(function(responce){
        console.log(responce.data);
      })
      localStorage.removeItem("token") 
			self.$router.push({name: "Login"});
    }
  },
}

export { Dashboard }