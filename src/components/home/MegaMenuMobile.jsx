import axios from 'axios';
import React, { Component, Fragment } from 'react'
import appURL from '../api/appURL';
export class MegaMenuMobile extends Component {
    constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
        this.state ={
            allCategories : [],
            allSubCategories : [],
        }
    }

    componentDidMount(){
        this.MegaMenu();
        axios.get(appURL.BaseURL+'/get-sub-category')
        .then((res)=>{
          this.setState({
            allCategories : res.data.allCategories,
          });
        })
        .catch((err)=>{
    
        })
    }

    MegaMenu(){
        var acc = document.getElementsByClassName('accordionMobile');
        
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
    let Cat =  this.state.allCategories;
    let CatList = Cat.map((Cat,i)=>{
        return <div key={i.toString()}>
            
            <button onClick={this.MenuItemClick} className='accordionMobile'>
                <img className='accordionMenuMobileIcon' src={Cat.category_image} alt="" />&nbsp; {Cat.category_name}
            </button>

            <div className='panelMobile'>
                <ul>
                    {
                        Cat.subcategory.map((SubCat,idx)=>{
                            return <li><a href="#" className="accordionMobileItem" > {SubCat.sub_category_name}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    })
    return (
        <div className='accordionMenuMobileDiv'>
        <div className='accordionMenuMobileDivInside'>
        {CatList}
            
        </div>
  </div>
    )
  }
}

export default MegaMenuMobile
