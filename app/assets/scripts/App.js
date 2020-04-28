import '../styles/style.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/revealOnScroll'
import StickeyHeader from './modules/StickeyHeader'
// import Modal from './modules/Modal'


// new Modal();
 new RevealOnScroll(document.querySelectorAll('.feature-item'),75);
 new RevealOnScroll(document.querySelectorAll('.testimonial'),60); 

let stickeyHeader = new StickeyHeader();
let mobileMenu = new MobileMenu();

let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
       if(typeof modal == 'undefined'){
        import( /* webpackChunkName: "modal" */  './modules/Modal').then(x=>{
            modal = new x.default();
            setTimeout(()=>modal.openTheModal(),20);
        }).catch(()=> console.log('There was a problem')); // returns a promise 
       }
       else{
        modal.openTheModal();
       }
    });
});

if(module.hot){
    module.hot.accept();
}












// class Adult extends Person{
//     payTaxes(){
//         console.log(this.name + ' now owes zero taxes')
//     }
// }

// let p1 = new Person('Johnny');
//  p1.greet()  ;

//  let p2 = new Adult('Jane');
//  p2.greet()  ;
//  p2.payTaxes()  ;