
class MyPromise {

    constructor(initFunction) {
        this.onResolve = this.onResolve.bind(this)
        this.onReject = this.onReject.bind(this)
        this.then = this.then.bind(this)
        this.catch = this.catch.bind(this)

        initFunction(this.onResolve, this.onReject)
    }

    onResolve(value) {
        value && this.resolveCallBack(value)
    }

    onReject(value) {
        value && this.rejectCallBack(value)
    }

    then(callBack) {
        this.resolveCallBack = callBack
        return this
    }

    catch(callBack) {
        this.rejectCallBack = callBack
    }
}

let instanse1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() * 10 > 5) resolve('Everething is ok')
        else reject('Something went wrong')
    }, 3000)
})

instanse1.then(result => console.log('result: ', result)).catch(err => console.log('error: ', err))

