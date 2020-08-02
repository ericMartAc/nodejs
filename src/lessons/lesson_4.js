module.exports = () => {
    var i = 0;

    setInterval(() => {
        if (i < 5) {
            console.log(i)
        }
        i++
    }, 2000);

}