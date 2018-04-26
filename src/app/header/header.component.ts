import { Component, OnInit,ElementRef, ViewChild, Renderer } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
		trigger('expandCollapse', [ 
		  state('expandCollapseState', style({height: '*'})),
      transition('* => void', [style({height: '*'}), animate(1000, style({height: "0"})) ]),
      transition('void => *', [style({height: '0'}), animate(1000, style({height: "*"})) ])
	],
  ),trigger('moveState', [
  state('moveUp', style({
    transform: 'translateX(250px)'
  })),
  transition('* => moveUp', animate('200ms ease-in'))
])],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openCloseAnim:boolean = false;
    state = 'moveUp';
  @ViewChild('thisElement') thisBox: ElementRef;
  position: number = 0;
  fieldsArray = ['Pay With Visa','Partner With Us','Run Your Business','Travel With Visa','Visa Everywhere'];
  constructor( private renderer:Renderer) { }

  ngOnInit() {
  }
  showDiv(index){
    this.openCloseAnim = true;
    this.state = 'moveUp';
    console.log(this.position);
    console.log(this.position != index);
    console.log(index);
    this.position = index;
    setTimeout(() => {
      // this.state = 'static';
      this.renderer.setElementStyle(this.thisBox.nativeElement, 'transform', 'translateX(' + String((this.position * 225)+(this.position>2?60:0)) + 'px)');
    }, 100);
  }
}

