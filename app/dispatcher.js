import Rx from 'rx';

const dispatcher = Rx.ReplaySubject();

export default {
    registerActions: (actions) => {
        actions.onNext(dispatcher.onNext);
    },
    scan: dispatcher.scan
}

