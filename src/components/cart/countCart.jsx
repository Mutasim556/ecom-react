import axios from "axios";
import appURL from "../api/appURL";

export default class countCart{
    
    static lol=()=>{
        let cnt = 0;
        if(localStorage.getItem('token')){
            axios.get(appURL.BaseURL+"/count-cart",{
                headers :{
                  'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                }
              })
            .then((res)=>{
                // this.cnt=res.data.count;
                cnt = res.data.count;
                
            }).catch((err)=>{
                this.cnt=0;
            })

            return cnt;
        }
    }
    
}