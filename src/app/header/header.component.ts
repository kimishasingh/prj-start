import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() navTypeSelected = new EventEmitter<string>();

    onSelect(navType: string) {
        this.navTypeSelected.emit(navType);
    }
}