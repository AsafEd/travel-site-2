import '../styles/style.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/revealOnScroll'
// import Person from './modules/Person'

 new RevealOnScroll(document.querySelectorAll('.feature-item'),75); 
 new RevealOnScroll(document.querySelectorAll('.testimonial'),60); 

let mobileMenu = new MobileMenu();

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