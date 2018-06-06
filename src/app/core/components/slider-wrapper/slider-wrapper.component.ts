import {
  NgModule,
  Component,
  Compiler,
  ViewContainerRef,
  ViewChild,
  Input,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ChangeDetectorRef
} from '@angular/core';

// Helper component to add dynamic components
@Component({
  selector: 'app-dcl-slider-wrapper',
  template: `
    <div #target></div>`
})
export class SliderWrapperComponent {
  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() type;
  @Input() settings;
  cmpRef: ComponentRef<any>;

  private x = 0;
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
              private cdRef: ChangeDetectorRef) {
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
    this.cmpRef.instance.settings = this.settings;
    // to access the created instance use
    // this.compRef.instance.someProperty = 'someValue';
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();

    let ul = this.target.element.nativeElement.nextSibling.getElementsByClassName('post-slider')[0];
    let next = this.target.element.nativeElement.nextSibling.getElementsByClassName('trav-angle-right')[0];
    let prev = this.target.element.nativeElement.nextSibling.getElementsByClassName('trav-angle-left')[0];
    let containerWidth = this.target.element.nativeElement.nextSibling.getElementsByClassName('post-slide-wrap')[0].offsetWidth;

    let fullWidth = (this.settings.width + 20) * this.settings.count - 20;

    next.onclick = () => {
      if (this.x === containerWidth - fullWidth) {
        this.x = 0;
        return this.transform(ul, this.x);
      }
      if ((this.x - this.settings.width - 20) >= containerWidth - fullWidth) {
        this.x = this.x - this.settings.width - 20;
        return this.transform(ul, this.x);
      }
      if ((this.x - this.settings.width - 20) < containerWidth - fullWidth) {
        this.x = containerWidth - fullWidth;
        return this.transform(ul, this.x);
      }

    };


    prev.onclick = () => {
      if (this.x === 0 ) {
        this.x = containerWidth - fullWidth;
        return this.transform(ul, this.x);
      }
      if ((this.x + this.settings.width + 20) <= 0) {
        this.x = this.x + this.settings.width + 20;
        return this.transform(ul, this.x);

      }
      if ((this.x + this.settings.width + 20) > 0) {
        this.x = 0;
        return this.transform(ul, this.x);
      }
    };
    this.target.element.nativeElement.nextSibling.getElementsByClassName('post-slider')[0].style.width = fullWidth + 'px';
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  transform(ul, x) {
    ul.style.transform = `translateX(${x}px)`;
  }


}




