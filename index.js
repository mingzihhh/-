function Carousel($ct){
    this.init($ct)
    this.bind()
}
Carousel.prototype = {
    init: function($ct){
        this.$ct = $ct
        this.$imgCt = this.$ct.find('.img-ct')
        this.$imgs = this.$imgCt.find('li')
        this.$preBtn = this.$ct.find('.pre')
        this.$nextBtn = this.$ct.find('.next')
        this.$bullets = this.$ct.find('.bullet li')
        this.isAnimate = false

        this.imgWidth = this.$imgs.width()
        this.imgCount = this.$imgs.length
        this.index = 0

        this.$imgCt.append(this.$imgs.first().clone())
        this.$imgCt.prepend(this.$imgs.last().clone())
        this.$imgCt.width(this.imgWidth * (this.imgCount+2))
        this.$imgCt.css('left',-this.imgWidth)
    },
    bind: function(){
        var _this = this
        this.$preBtn.on('click',function(){
            console.log('pre')
            _this.playPre(1)
        })
        this.$nextBtn.on('click', function () {
            console.log('next')
            _this.playNext(1)
        })
        this.$bullets.on('click', function () {
            console.log($(this).index())
            var index = $(this).index()
            if(index > _this.index){
                _this.playNext(index - _this.index)
            }else{
                _this.playPre(_this.index - index)
            }
        })
    },
    playPre: function (len) {
        var _this = this
        if(_this.isAnimate) return
        _this.isAnimate = true
        this.$imgCt.animate({
            left: '+=' + this.imgWidth * len +'px'
        },function(){
            _this.index -= len
            if (_this.index < 0) {
                _this.$imgCt.css('left', -_this.imgWidth * _this.imgCount)
                _this.index = _this.imgCount - 1  
            }
            console.log(_this.index)
            _this.setBullet()
            _this.isAnimate = false
        })
        

    },
    playNext: function (len) {
        var _this = this
        if (_this.isAnimate) return
        _this.isAnimate = true
        this.$imgCt.animate({
            left: '-=' + this.imgWidth * len + 'px'
        },function(){
            _this.index += len
            console.log(_this.index)
            if (_this.index >= _this.imgCount) {
                _this.$imgCt.css('left', -_this.imgWidth)
                _this.index = 0
            }
            _this.setBullet()
            _this.isAnimate = false
        })
       
    },
    setBullet: function () {
        this.$bullets.eq(this.index).addClass('active').siblings().removeClass('active')

    },
    autoPlay: function(){
        var _this = this
        _this.autoClock = setInterval(function(){
            _this.playNext(1)
        },3000)
    },
    stopAuto: function(){
        clearInterval(this.autoClock)
    }

}
var carousel1 = new Carousel($('.carousel').eq(0))
var carousel2 = new Carousel($('.carousel').eq(1))
var carousel3 = new Carousel($('.carousel').eq(2))