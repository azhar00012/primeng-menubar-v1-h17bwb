import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = "Angular 5";
  activeMenu = "Add User";

  name = [
    // { label: "New", icon: "fa fa-eye", styleClass: "azhar" },
    {
      label: "New",
      command: (event: Event) => {
        this.addActiveOnCommand(event);
      },
      icon: "fa fa-eye"
    },
    {
      label: "Download",
      command: (event: Event) => {
        this.addActiveOnCommand(event);
      }
    },
    {
      label: "Add User",
      command: (event: Event) => {
        this.addActiveOnCommand(event);
      }
    },
    {
      label: "Remove User",
      command: (event: Event) => {
        this.addActiveOnCommand(event);
      }
    }
  ];

  ngOnInit() {
    let activeMenu = this.activeMenu;
    this.name.forEach(function(menuItem) {
      delete menuItem.icon;
      if (menuItem.label === activeMenu) {
        menuItem.icon = "fa fa-eye";
      }
    });
  }

  addActiveOnCommand(event) {
    console.log(event);
    this.name.forEach(function(menuItem) {
      delete menuItem.icon;
    });
    event.item.icon = "fa fa-eye";
    this.activeMenu = event.item.label;
  }
}
