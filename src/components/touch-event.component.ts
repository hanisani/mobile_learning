import { Component } from '@angular/core';

@Component({
    selector: 'app-touch-event',
    template: `
    <div class="gestures" (click)="OnElementClicked()">
        Click me
    </div>
    <div class="gestures" (tap)="onElementTapped()">
        Tap me
    </div>
    <div class="gestures" (press)="onElementPressed()" (tap)="onElementTapped()">
        Long Press me
    </div>`
})
export class TouchEventComponet {
    OnElementClicked() {
        console.log('I was clicked or touched');
    }

    onElementTapped() {
        console.log('I was tapped');
    }

    onElementPressed() {
        console.log('I was pressed');
    }
}