const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const FONT_SIZE = 18
const COLUMNS = canvas.width / FONT_SIZE

const drops = []
for (let index = 0; index < COLUMNS; index++) {
    drops[index] = ''
    
}

function getText() {
    const text = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"]
    return text[Math.floor(Math.random() * text.length)]
}

function drawn() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#0F0'
    ctx.font = FONT_SIZE + 'px arial'

    for (let index = 0; index < drops.length; index++) {
        const text = getText()
        ctx.fillText(text, index * FONT_SIZE, drops[index] * FONT_SIZE)

        if(drops[index] * FONT_SIZE > canvas.height || Math.random() > 0.97) {
            drops[index] = 0
        }
        drops[index]++
        
    }
}

setInterval(drawn, 50)