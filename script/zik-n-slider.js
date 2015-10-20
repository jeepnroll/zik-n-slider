/* 
 * Slider réalisé par Zik'N'Com
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
      s = new zikNslider("#gallerie");
      
} ) ;

var zikNslider = function(id){
        var self = this;
        this.div = $(id);       
        this.largeurCache = this.div.width();
        this.largeur = 0;       
        this.slider = this.div.find(".gal-content");
        this.div.find("div[class^='slide-']").each(function(){
           self.largeur+= $(this).width();
           self.largeur+=parseInt($(this).css("padding-left"));
           self.largeur+=parseInt($(this).css("padding-right"));
           self.largeur+=parseInt($(this).css("margin-left"));
           self.largeur+=parseInt($(this).css("margin-right"));
        });        
        this.prec = this.div.find(".prec");
        this.suiv = this.div.find(".suiv");
        this.saut = this.largeurCache;
        this.nbEtapes = Math.ceil(this.largeur / this.saut) ;     
        this.courant= 0;
        this.nbDeplac = this.nbEtapes - this.largeurCache / this.saut  ;     
        this.largeurContainer = this.nbEtapes * this.largeurCache;        
        this.slider.css({width: this.largeurContainer});
              
    
        this.suiv.click(function(){             
            if(self.courant < self.nbDeplac ){                         
                self.courant++;                            
                self.slider.animate({left : -self.courant * self.saut} , 500);                  
            }                   
        });    

        this.prec.click(function(){              
            if(self.courant > 0 ){
                self.courant--;
                self.slider.animate({left : -self.courant * self.saut} , 500);                
            }
        });            
    };


