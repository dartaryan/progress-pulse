import { Component, effect, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-progress-circle',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './progress-circle.component.html',
    styleUrl: './progress-circle.component.css'
})
export class ProgressCircleComponent {
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
        const mins = minutes % 60;
        return `${ hours }:${ mins < 10 ? '0' + mins : mins }`;
    }
}
