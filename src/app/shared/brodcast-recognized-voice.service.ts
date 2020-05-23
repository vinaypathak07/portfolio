import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrodcastRecognizedVoiceService {

  recognizedVoice = new Subject();
  recognized: string;
  constructor() { }

  setRecognizedWord(word) {
    // this.recognized = word;
    this.recognizedVoice.next(word);
  }

  getRecognizedWord() {
  }
}
