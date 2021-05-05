import { Component, Input, Output, EventEmitter } from "@angular/core";
import "./hello.component.css";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html"
})
export class HelloComponent {
  @Input() name: any;

  ngOnInit() {}
}
