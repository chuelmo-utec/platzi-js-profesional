import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/Ads/AdsPlugin'

const video = document.querySelector('video')
const playButton: HTMLElement = document.getElementById('playButton')
const muteButton: HTMLElement = document.getElementById('muteButton')
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin(),
] })
playButton.onclick = () => player.togglePlay(playButton)
muteButton.onclick = () => player.toggleMute(muteButton)

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}