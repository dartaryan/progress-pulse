import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const textChangeAnimation = trigger('textChange', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
    ]),
]);

export const languageChangeAnimation = trigger('languageChange', [
    transition('* => *', [
        animate('700ms ease-in-out', keyframes([
            style({ opacity: 1, transform: 'perspective(600px) rotateY(0deg)', offset: 0 }),
            style({ opacity: 0.3, transform: 'perspective(600px) rotateY(90deg)', offset: 0.3 }),
            style({ opacity: 0.3, transform: 'perspective(600px) rotateY(270deg)', offset: 0.7 }),
            style({ opacity: 1, transform: 'perspective(600px) rotateY(360deg)', offset: 1 }),
        ]))
    ])
]);
