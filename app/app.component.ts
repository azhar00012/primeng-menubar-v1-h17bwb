import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  activeMenu = "Download";

  menuItems = [
    {
      label: "New"
    },
    {
      label: "Download"
    },
    {
      label: "Add User"
    },
    {
      label: "Remove User"
    }
  ];

  ngOnInit() {}

  OnValueChange(selectedMenu) {
    this.activeMenu = selectedMenu;
  }
}
