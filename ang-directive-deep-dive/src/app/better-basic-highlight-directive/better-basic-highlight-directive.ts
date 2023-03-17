import { OnInit , Renderer2 , ElementRef, Directive , HostListener, Input, HostBinding } from "@angular/core";

@Directive({
 selector:'[betterBasicHighlightDirective]'   
})
export class BetterBasicHighlightDirective implements OnInit {
    @Input() defaultColor: string ='transparent';
    @Input('appBetterHighlightColor') highlightColor: string = 'blue'
    @HostBinding('style.backgroundColor') backgroundColor!: string ;
    constructor( private elemRef:ElementRef ,private renderer: Renderer2) {}

    ngOnInit(): void {
        
    }
        @HostListener('mouseenter') mouseover(eventData: Event) {
            
            //this.renderer.setStyle(this.elemRef.nativeElement,'background-color', 'blue');
            this.renderer.setStyle(this.elemRef.nativeElement,'color', '#ffffff' );
            this.backgroundColor = this.highlightColor
        }

        @HostListener('mouseleave') mouseleave(eventData: Event) {
            
            //this.renderer.setStyle(this.elemRef.nativeElement,'background-color', 'transparent');
            this.backgroundColor = this.defaultColor;
            this.renderer.setStyle(this.elemRef.nativeElement,'color', 'black');
            
        }
        
    
    }

