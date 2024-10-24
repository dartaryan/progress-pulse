import { ProgressFormComponent } from '../components/progress-form/progress-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProgressCircleComponent } from '../components/progress-circle/progress-circle.component';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { English, Language } from '../components/header/header.consts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ProgressFormComponent, ProgressCircleComponent, TranslateModule, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [TranslateService]
})
export class AppComponent implements OnInit {
    title = 'ProgressPulse';
    percentageWatched: number = 0;
    remainingTimeInMinutes: number = 0;
    public selectedLanguage = signal<Language>(English)
    private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['de', 'en', 'he', 'ru']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    public switchLanguage(lang: Language): void {
        this.selectedLanguage.set(lang);
        this.translate.use(lang.code);
    }

    public onProgressCalculated(data: { percentageWatched: number, remainingTimeInMinutes: number }): void {
        this.percentageWatched = data.percentageWatched;
        this.remainingTimeInMinutes = data.remainingTimeInMinutes;
    }

    ngOnInit(): void {


    }
}
