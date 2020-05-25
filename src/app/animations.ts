import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

// export const slideInAnimation =
//   trigger('routeAnimations', [
//     transition('ViewPageOne <=> ViewPageTwo', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//         //   top: 0,
//         //   left: 0,
//           width: '100%',
//         //   height: 'calc(100% - 64px)'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%'})
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('300ms ease-out', style({ left: '100%'}))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%'}))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ]);


export const slideInAnimation =
    trigger('routeAnimations', [
        // transition('* => home', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        // transition('home => skills', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(100%)' }),
        //             animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        // transition('skills => home', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        transition('skills => home, projects => home, projects => skills,journey-so-far => home,journey-so-far => skills ,journey-so-far => projects, certificates => home, certificates => home, certificates => skills,certificates => projects,certificates => journey-so-far,contact => home,contact => skills,contact => projects,contact => journey-so-far,contact => certificates, ViewPageTwo => ViewPageOne', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', background: 'linear-gradient(to right, #E100FF, #7F00FF)' 
                     }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', background: 'linear-gradient(to right, #E100FF, #7F00FF)'  }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(100%)'}))
                ], { optional: true }),
            ])
        ]),
        transition('home => *,skills => *,projects => *, journey-so-far => *, certificates => *, contact => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', background: 'linear-gradient(to right, #E100FF, #7F00FF)'  }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', background: 'linear-gradient(to right, #E100FF, #7F00FF)'  }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
    ]);



export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])]);
