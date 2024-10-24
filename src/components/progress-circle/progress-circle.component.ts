import { Component, effect, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DecimalPipe } from '@angular/common';
import { textChangeAnimation } from '../../app/animations/text-animations';
import { Language } from '../header/header.consts';

@Component({
    selector: 'app-progress-circle',
    standalone: true,
    imports: [TranslateModule, DecimalPipe],
    templateUrl: './progress-circle.component.html',
    styleUrl: './progress-circle.component.scss',
    animations: [textChangeAnimation],
})
export class ProgressCircleComponent {
    public selectedLanguage = input.required<Language>();
    public percentageWatched = input<number>(0);
    public remainingTimeInMinutes = input<number>(0);
    public circleRadius: number = 45;
    public circleCircumference: number = 2 * Math.PI * this.circleRadius;
    public strokeDashoffset: number = this.circleCircumference;

    constructor() {
        effect(() => {
            this.updateCircle(this.percentageWatched());
        });
    }

    updateCircle(percentage: number) {
        this.strokeDashoffset = this.circleCircumference - (percentage / 100) * this.circleCircumference;
    }

    formatTime(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const mins = Math.floor(minutes % 60);
        return `${ hours }:${ mins < 10 ? '0' + mins : mins }`;
    }
}
