import { ProgressFormComponent } from '../components/progress-form/progress-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProgressCircleComponent } from '../components/progress-circle/progress-circle.component';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ProgressFormComponent, ProgressCircleComponent, TranslateModule, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [TranslateService]
})
export class AppComponent implements OnInit {
    title = 'ProgressPulse';
    percentageWatched: number = 0;
    remainingTimeInMinutes: number = 0;
    private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['de', 'en', 'he', 'ru']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    public switchLanguage(lang:string): void {
        this.translate.use(lang);
    }

    public onProgressCalculated(data: { percentageWatched: number, remainingTimeInMinutes: number }): void {
        this.percentageWatched = data.percentageWatched;
        this.remainingTimeInMinutes = data.remainingTimeInMinutes;
    }

    ngOnInit(): void {


    }
}
