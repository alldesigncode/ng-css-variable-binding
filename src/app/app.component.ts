import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav: ElementRef<HTMLDivElement>;

  public navList = [
    { name: 'Home' },
    { name: 'Features' },
    { name: 'Contact' },
    { name: 'About' },
  ];

  navWidth = 500;
  lineWidth = 0;
  translateLine = 0;

  ngOnInit() {
    this.lineWidth =
      Math.floor(this.navWidth / this.navList.length) ??
      Math.floor(
        this.nav.nativeElement.getBoundingClientRect().width /
          this.navList.length
      );
  }

  onClick(item: HTMLDivElement, i: number) {
    const { width } = item.getBoundingClientRect();
    this.translateLine = width * i;
  }
}
