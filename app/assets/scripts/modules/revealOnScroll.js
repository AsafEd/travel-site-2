import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll{
    constructor(els, thresholdPercent){
        this.thresholdPercent = thresholdPercent;
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
        this.events();
    }

    events(){
        window.addEventListener('scroll',this.scrollThrottle);
       
        window.onresize = debounce(()=>{
            console.log('resize just ran !!!!!!!!!!1')
            this.browserHeight = window.browserHeight;
        }, 300);
            
       
    }

    calcCaller(){
        console.log('scroll func ran')
        this.itemsToReveal.forEach(el => {
            if(!el.isRevealed){
                this.calculteIfScrolledTo(el);
            }
            
        })
    }

    calculteIfScrolledTo(el){
       if(window.scrollY + this.browserHeight > el.offsetTop){
            // console.log(el.getBoundingClientRect().y);
            console.log('el was calculated')
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
            if(scrollPercent < this.thresholdPercent){
                el.classList.add('reveal-item--is-visible');
                el.isRevealed = true;
                if(el.isLastItem){
                    window.removeEventListener('scroll',this.scrollThrottle);
                }

            }
        }
    }

    hideInitially(){
        this.itemsToReveal.forEach(el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;

        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
            
        
    }

}

export default RevealOnScroll;