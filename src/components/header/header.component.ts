import { Component, output } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    public switchLanguage = output<string>()


    public onSwitchLanguage(event:Event): void {
        const target = event.target as HTMLSelectElement;
        const lang = target.value;
        this.switchLanguage.emit(lang);
    }
}


