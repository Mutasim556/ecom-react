import React, { Component, Fragment } from 'react'
import axios from 'axios'
import appURL from '../api/appURL'
export class MegaMenu extends Component {
    constructor(props){
        super(props);
        this.MegaMenu = this.MegaMenu.bind(this);
        this.state = {
            allCategories : [],
            allSubCategories : [],
          }
    }

    componentDidMount(){
        this.MegaMenu();
        axios.get(appURL.BaseURL+'/get-category')
        .then((res)=>{
        this.setState({
            allCategories : res.data,
        });
        })
        .catch((err)=>{

        })
    }
    MenuItemClick=(event)=>{
        event.target.classList.toggle("active");
        var panel = event.target.nextElementSibling;
        if(panel.style.maxHeight){
             panel.style.maxHeight = null;
        }else{
             panel.style.maxHeight= panel.scrollHeight+ "px"
        }

   }
    MegaMenu(){
        var acc = document.getElementsByClassName('accordion');
        
        var acc_length = acc.length;
        var i;
        for(i=0;i<acc_length;i++){
            acc[i].onclick=function(){
                this.classList.toggle('active');
                var panel = this.nextSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            };
        }
    }


    MenuItemClick=(event)=>{
        event.target.classList.toggle("active");
        var panel = event.target.nextElementSibling;
        if(panel.style.maxHeight){
             panel.style.maxHeight = null;
        }else{
             panel.style.maxHeight= panel.scrollHeight+ "px"
        }

   }
   
  render() {
    let Cat = this.state.allCategories;
    let CatList = Cat.map((Cat,i)=>{
        return <div key={i.toString()}>
        <button onClick={this.MenuItemClick} className="accordion">
        <img className="accordionMenuIcon" src={Cat.category_image} />&nbsp; {Cat.category_name}
                          </button>
            <div className="panel">
        <ul>
            <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
            <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            {/* {
                 (CatList.subcategory_name).map((SubList,i)=>{
                      return <li><a href="#" className="accordionItem" >{SubList.subcategory_name} </a></li>
  
                 })    
            } */}
  
        </ul>
           </div> 
           </div>   
    })
    // let subCat = this.state.allSubCategories;
    // let subCatList = subCat.map((subCat,i)=>{
    //     return <div key={i.toString()}>
    //             <button className='accordion'>
    //                 <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/709/709699.png" alt="" />&nbsp;{subCat.subcategory.category_name}
    //             </button>

    //             <div className='panel'>
    //                 <ul>
    //                     <li><a className='accordionItem' href="">Mens T-shirt</a></li>
    //                     <li><a className='accordionItem' href="">Mens T-shirt</a></li>
    //                 </ul>
    //             </div>
    //     </div>   
    // })
    return (
      <div className='accordionMenuDiv'>
            <div className='accordionMenuDivInside'>
                {/* {subCatList} */}
                {CatList}
            </div>
      </div>
    )
  }
}

export default MegaMenu
