function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false
}

MediaPlayer.prototype.togglePlay = function(button = null) {
    if (this.media.paused){
        this.play()
        if (button) {
            button.textContent = "Pause"
        }
    } else {
        this.pause()
        if (button) {
            button.textContent = "Play"
        }
    }
}

MediaPlayer.prototype.toggleMute = function(button = null) {
    if (this.media.muted){
        this.unmute()
        if (button) {
            button.textContent = "Mute"
        }
    } else {
        this.mute()
        if (button) {
            button.textContent = "Unmute"
        }
    }
}

export default MediaPlayer