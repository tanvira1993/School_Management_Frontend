import { DashboardTemplate } from '../templates/dashboard-template.js'
import { base_url} from "../global.js";

const Dashboard = {
  template: DashboardTemplate,

  data(){
    return{
      user:{},
      input: { id: ''},
    }
  },
  mounted(){
    this.userInfo();
  },
  methods: {
    userInfo(){
      var id = localStorage.getItem("idUser");
      this.input.id = localStorage.getItem("idUser");
      // console.log(this.input);
      var vm = this;
      axios.get(base_url+"api/singleUser/"+id, vm.input)
        .then(function (response) {
           vm.user = response.data.data;
           // console.log(vm.user);
        })
        .catch(function (error) {
          console.log(error.response);
        });
  },
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