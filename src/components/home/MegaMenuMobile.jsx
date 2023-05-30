import React, { Component, Fragment } from 'react'

export class MegaMenuMobile extends Component {
    constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount(){
        this.MegaMenu();
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
  render() {
    return (
        <div className='accordionMenuMobileDiv'>
        <div className='accordionMenuMobileDivInside'>
            <button className='accordionMobile'>
                <img className='accordionMenuMobileIcon' src="https://cdn-icons-png.flaticon.com/128/709/709699.png" alt="" />&nbsp; Mens Clothing
            </button>

            <div className='panelMobile'>
                <ul>
                    <li><a className='accordionMobileItem' href="">Mens T-shirt</a></li>
                    <li><a className='accordionMobileItem' href="">Mens T-shirt</a></li>
                </ul>
            </div>
        </div>
  </div>
    )
  }
}

export default MegaMenuMobile
