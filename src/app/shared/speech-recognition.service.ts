import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

type IWindow = (typeof window) & {
    webkitSpeechRecognition: any;
};

@Injectable({
    providedIn: 'root'
})

export class SpeechRecognitionService {

    speechRecognition: any;

    constructor(private zone: NgZone) { }

    record(): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = window as IWindow;
            this.speechRecognition = new webkitSpeechRecognition();
            this.speechRecognition.continuous = true;
            // this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = speech => {
                let term: string;
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            // console.log('Unrecognized result.Please try again');
                        } else {
                            term = transcript;
                            // console.log(transcript);
                            // console.log('Did you said?' + term + ' , If not then say something else...');
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onend = () => {
                observer.complete();
            };

            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }

    DestroySpeechObject() {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    }

}
