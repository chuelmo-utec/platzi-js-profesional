class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }

        this.plugins.forEach(plugin => {
            plugin.run(player)
        })
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    togglePlay(button = null) {
        if (this.media.paused) {
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
    toggleMute(button = null) {
        if (this.media.muted) {
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
}








export default MediaPlayer