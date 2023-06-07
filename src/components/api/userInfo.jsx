import axios from "axios";
import appURL from "./appURL";

export default class userInfo{
    static LoginToken = localStorage.getItem('token')

    static userInfo = '';
    
        checkUser = () =>{
        
            if(this.LoginToken!=null){
                axios.get(appURL.BaseURL+'/get-user-info',{
                    headers :{
                      'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                    }
                  })
                  .then((res)=>{
                        this.userInfo = res.data
                  })
            }
            return this.userInfo;
        }
    

    static user = this.userInfo;

    
    
}