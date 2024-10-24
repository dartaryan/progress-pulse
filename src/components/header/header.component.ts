import { Component, output, signal } from '@angular/core';
import { availableLanguages, English, Language } from './header.consts';
import { textChangeAnimation } from '../../app/animations/text-animations';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    animations: [textChangeAnimation]
})
export class HeaderComponent {
    public switchLanguage = output<Language>()
    public dropdownOpen = signal(false);
    public selectedLanguage = signal<Language>(English);
    public languages = availableLanguages

    public toggleDropdown(): void {
        this.dropdownOpen.set(!this.dropdownOpen());
    }

    public selectLanguage(language: Language): void {
        this.selectedLanguage.set(language);
        this.switchLanguage.emit(language);
        this.dropdownOpen.set(false);
    }
}


