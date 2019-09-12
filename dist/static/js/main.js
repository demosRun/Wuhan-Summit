// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

function getScale () {
  // 如果比例大于1则进入电脑模式
  if ((window.innerWidth / window.innerHeight) < 1) {
    var scale = window.innerWidth / deviseW
    document.body.style.width = deviseW + 'px'
    document.body.style.height = deviseH + 'px'
    document.body.style.transform = `scale(${scale}, ${scale})`
    // console.log(window.innerHeight, deviseH * scale)
    document.body.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`
  } else {
    var scale = (window.innerHeight / deviseH).toFixed(2)
    document.body.style.width = deviseW + 'px'
    document.body.style.height = deviseH + 'px'
    document.body.style.transform = `scale(${scale}, ${scale}) translate(${(window.innerWidth - deviseW * scale) / 2 / scale + 'px' }, 0)`
    document.body.style.transformOrigin = '0 0 0'
  }
  setTimeout(() => {
    document.getElementsByTagName('html')[0].style.height = document.body.offsetHeight * scale + 'px'
    document.body.style.display = 'block'
  }, 0)
}

getScale()

let timer = null
window.onresize = () => {
  console.log(timer)
  if (!timer) {
    timer = setTimeout(() => {
      getScale()
      timer = null
    }, 1000)
  }
}

function scrollIntoView () {
  // alert('滚动')
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})