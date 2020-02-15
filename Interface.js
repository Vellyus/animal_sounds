class Interface {
  constructor() {
    this.nrOfSlots = 12;
    this.slots = [];
    this.images = [];
    this.animalList = new AnimalList();
    this.audioPlayer = new AudioPlayer();
    this.createSlots();
    this.appendImages();
    this.addCaptions();
    this.eventListeners();
  }

  createSlots() {
    for (let i = 0; i < this.nrOfSlots; i++){
      this.slots[i] = this.animalList.randomized[i];
    }
  }

  appendImages() {
    for ( let i = 0; i < this.slots.length; i++) {

      let random = Math.floor(Math.random() * 3);

      this.images[i] = document.createElement('img');
      document.querySelector('body').appendChild(this.images[i]);
      this.images[i].setAttribute('src', this.slots[i].images[random])
    }
  }

  addCaptions() {
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].setAttribute('title', this.slots[i].type);
    }
  }

  eventListeners() {
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].addEventListener('click', () => {
        this.audioPlayer.setSrc(this.slots[i].sound);
        this.audioPlayer.audioElement.play();
      })
    }
  }
}
