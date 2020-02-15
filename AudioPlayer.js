class AudioPlayer {
  constructor() {
    this.createAudioElement();
    this.audioElement = document.querySelector('audio');
  }

  createAudioElement() {
    const audio = document.createElement('audio');
    audio.style.display = 'none';
    audio.setAttribute('src', this.src);
    audio.setAttribute('controls', true);
    audio.volume = 0.3;
    document.querySelector('body').appendChild(audio);
  }

  setSrc(url) {
    this.audioElement.setAttribute('src', url);
  }
}