import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderEmitterService {
	private emitChangeSource = new Subject<any>();
	
	changeEmitted$ = this.emitChangeSource.asObservable();
	
	emitChange(change: any) {
		this.emitChangeSource.next(change);
	}

} // EXPORT