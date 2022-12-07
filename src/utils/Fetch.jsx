let ok = true

const Fetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                resolve(task)
            } else {
                reject("Error in Fetch :(")
            }
        }, time)
    })
}

export default Fetch