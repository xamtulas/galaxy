import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InjectorContext } from './injector-context';
import { Injector } from '@angular/core';

export class Render {
    static init(injector: Injector, Component, container) {
        ReactDOM.render(
            <InjectorContext.Provider value={{ injector: injector }}>
                <Component injector={injector} />
            </InjectorContext.Provider>,
            container,
        );
    }

    static unmount(container) {
        ReactDOM.unmountComponentAtNode(container);
    }
}
