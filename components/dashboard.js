import { DashboardTemplate } from '../templates/dashboard-template.js'

const Dashboard = {
  template: DashboardTemplate,

  methods: {
    logout(){
      let self = this;
      localStorage.removeItem("token") 
			self.$router.push({name: "Login"});
    }
  },
}

export { Dashboard }