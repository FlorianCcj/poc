import { Component } from "@angular/core";
import {registerElement} from 'nativescript-angular/element-registry'
registerElement('Checkbox', () => require('nativescript-checkbox').CheckBox)

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
	public counter: number = 16;

	public get message(): string {
		if (this.counter > 0) {
			return this.counter + "taps left":
		} else {
			return "Hoorraaay ! \n You are ready to start buildong"
		}
	}

	public onTap() {
		this.counter--;
	}
}
