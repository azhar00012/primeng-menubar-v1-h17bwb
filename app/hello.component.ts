import { Component, Input, Output, EventEmitter } from "@angular/core";
import "./hello.component.css";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html"
})
export class HelloComponent {
  @Input() menuItems: any;
  @Input() activeMenu: string;
  @Output() OnValueChange = new EventEmitter();

  ngOnInit() {
    this.menuItems.forEach(menuItem => {
      menuItem.command = event => {
        this.addActiveOnCommand(event);
      };
      if (menuItem.label === this.activeMenu) {
        menuItem.icon = "fa fa-eye";
      }
    });
  }

  addActiveOnCommand(event) {
    this.menuItems.forEach(menuItem => {
      delete menuItem.icon;
    });
    event.item.icon = "fa fa-eye";
    this.activeMenu = event.item.label;
    this.OnValueChange.emit(this.activeMenu);
  }
}
