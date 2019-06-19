import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-area',
  templateUrl: './main-content-area.component.html',
  styleUrls: ['./main-content-area.component.scss']
})
export class MainContentComponent implements OnInit {
  public dragItem;
  public dragItem1;
  public dragItem2;
  public dragItem3;
  public container;

  private active = false;
  private currentX;
  private currentY;
  private initialX;
  private initialY;
  private xOffset = 0;
  private yOffset = 0;

  constructor() {}
  public addListeners = () => {
    this.container = document.querySelector('#dragContainer');
    this.dragItem = document.querySelector('#draggable');
    this.dragItem1 = document.querySelector('#draggable1');
    this.dragItem2 = document.querySelector('#draggable2');
    this.container.addEventListener('touchstart', this.dragStart, false);
    this.container.addEventListener('touchend', this.dragEnd, false);
    this.container.addEventListener('touchmove', this.drag, false);
    this.container.addEventListener('mousedown', this.dragStart, false);
    this.container.addEventListener('mouseup', this.dragEnd, false);
    this.container.addEventListener('mousemove', this.drag, false);
  }
  public dragStart = e => {
    if (e.type === 'touchstart') {
      this.initialX = e.touches[0].clientX - this.xOffset;
      this.initialY = e.touches[0].clientY - this.yOffset;
    } else {
      this.initialX = e.clientX - this.xOffset;
      this.initialY = e.clientY - this.yOffset;
    }
    if (
      e.target === this.dragItem ||
      e.target === this.dragItem1 ||
      e.target === this.dragItem2
    ) {
      this.active = true;
    }
  }
  public dragEnd = e => {
    this.initialX = this.currentX;
    this.initialY = this.currentY;
    this.active = false;
  }
  public drag = e => {
    if (this.active) {
      e.preventDefault();
      if (e.type === 'touchmove') {
        this.currentX = e.touches[0].clientX - this.initialX;
        this.currentY = e.touches[0].clientY - this.initialY;
      } else {
        this.currentX = e.clientX - this.initialX;
        this.currentY = e.clientY - this.initialY;
      }
      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      this.setTranslate(this.currentX, this.currentY, this.dragItem);
    }
  }
  public setTranslate = (xPos, yPos, el) => {
    if (xPos < 0) {
      xPos = 0;
    }
    if (yPos < 0) {
      yPos = 0;
    }
    if (xPos > this.container.offsetWidth) {
      xPos = this.container.offsetWidth;
    }
    if (yPos > this.container.offsetWidth) {
      yPos = this.container.offsetWidth;
    }
    el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
  }
  ngOnInit() {
    this.addListeners();
  }
}
