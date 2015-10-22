import Rx from 'rx';

const dispatcher = new Rx.ReplaySubject();
export default {
    registerActions: (actions) => {
        actions.forEach(dispatcher.onNext.bind(dispatcher));
    },
    scan: dispatcher.scan.bind(dispatcher)
}

