function MyLocalStorage(name='_') {
    this.name = name
    this.init()
}
MyLocalStorage.prototype.setItem = function(key, value, time) {
    const _key = this.name + key
    const _value = {value}
    time && (_value.time = new Date().getTime() + time * 1000)
    localStorage.setItem( _key, JSON.stringify(_value))
}
MyLocalStorage.prototype.getItem = function(key) {
    // return localStorage.getItem( this.name + key)
    const _key = this.name + key
    if(localStorage.getItem(_key)) {
        const _time = JSON.parse(localStorage.getItem(_key)).time
        if(!_time || new Date().getTime() <= _time) {
            return JSON.parse(localStorage.getItem(_key)).value
        }
        if (new Date().getTime() > _time) {
            localStorage.removeItem(_key)
        }
    }
    return null
}
MyLocalStorage.prototype.removeItem = function(key) {
    localStorage.removeItem( this.name + key)
}

MyLocalStorage.prototype.clear = function() {
    Object.keys(localStorage).forEach(item => {
        if(item.startsWith(this.name)) {
            localStorage.removeItem(item)
        }
    })
}
MyLocalStorage.prototype.length = function() {
    const arr = Object.keys(localStorage).filter(item => {
        return item.startsWith(this.name)
    })
    return arr.length
}
MyLocalStorage.prototype.init = function() {
    Object.keys(localStorage).forEach(item => {
        if(item.startsWith(this.name)) {
            if(JSON.parse(localStorage.getItem(item)).time && new Date().getTime() > JSON.parse(localStorage.getItem(item)).time) {
                localStorage.removeItem(item)
            }
        }
    })
}
export { MyLocalStorage }