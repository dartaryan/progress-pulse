import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-progress-form',
    standalone: true,
    imports: [TranslateModule, ReactiveFormsModule],
    templateUrl: './progress-form.component.html',
    styleUrl: './progress-form.component.scss'
})
export class ProgressFormComponent {
    form: FormGroup;

    public progressCalculated = output<{ percentageWatched: number, remainingTimeInMinutes: number }>();

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            totalHours: [null, [Validators.min(0)]],
            totalMinutes: [null, [Validators.min(0), Validators.max(59)]],
            remainingHours: [null, [Validators.min(0)]],
            remainingMinutes: [null, [Validators.min(0), Validators.max(59)]],
            watchedHours: [null, [Validators.min(0)]],
            watchedMinutes: [null, [Validators.min(0), Validators.max(59)]],
            timeToggle: ['remaining']
        });
    }

    toggleTimeInput(event: any) {
        this.form.patchValue({timeToggle: event.target.value});
    }

    calculateProgress() {
        const {
            totalHours,
            totalMinutes,
            remainingHours,
            remainingMinutes,
            watchedHours,
            watchedMinutes,
            timeToggle
        } = this.form.value;

        const totalTimeInMinutes = (totalHours * 60) + totalMinutes;
        let remainingTimeInMinutes = (remainingHours * 60) + remainingMinutes;
        const watchedTimeInMinutes = (watchedHours * 60) + watchedMinutes;

        if (timeToggle === 'watched') {
            remainingTimeInMinutes = totalTimeInMinutes - watchedTimeInMinutes;
        }

        const percentageWatched = ((totalTimeInMinutes - remainingTimeInMinutes) / totalTimeInMinutes) * 100;

        this.progressCalculated.emit({
            percentageWatched,
            remainingTimeInMinutes
        });
    }

    formatTime(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${ hours }:${ mins < 10 ? '0' + mins : mins }`;
    }
}
