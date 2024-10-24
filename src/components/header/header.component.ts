import { Component, output, signal } from '@angular/core';
import { availableLanguages, English, Language, LanguageCodes } from './header.consts';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    public switchLanguage = output<LanguageCodes>()
    public dropdownOpen = signal(false);
    public selectedLanguage = signal<Language>(English);
    public languages = availableLanguages

    public toggleDropdown(): void {
        this.dropdownOpen.set(true);
    }

    public selectLanguage(language: Language): void {
        this.selectedLanguage.set(language);
        this.switchLanguage.emit(language.code);
        this.dropdownOpen.set(false);
    }
}


