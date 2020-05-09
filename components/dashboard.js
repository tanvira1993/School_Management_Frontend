import { DashboardTemplate } from '../templates/dashboard-template.js'
import { base_url} from "../global.js";

const Dashboard = {
  template: DashboardTemplate,

  methods: {
    logout(){
      let self = this;
      let url = base_url+'api/logout';
      axios.get(url).then(function(responce){
        console.log(responce.data);
      })
      localStorage.removeItem("token") 
      localStorage.removeItem("idUser") 
      self.$router.push({name: "Login"});
    }
  },
}

export { Dashboard }