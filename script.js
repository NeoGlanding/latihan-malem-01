function wordChanger(word) {
    let str = ''
    for (let i = 0;i<word.length;i++) {
        if (i === 0 || word[i-1] === ' ') {
            str += word[i].toUpperCase()
        } else {
            str += word[i]
        }
    }
    console.log(str)
}

wordChanger('Selamat Pagi')