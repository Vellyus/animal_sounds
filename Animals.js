class AnimalList {
  constructor() {
    this.randomized = this.shuffleArray(animals);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

const animals = [
  {
    type: 'bear',
    images: ['img/bear1.jpg', 'img/bear2.jpg', 'img/bear3.jpg'], 
    sound: 'sound/bear.wav', 
    unused: true
  },

  {
    type: 'cat',
    images: ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg'], 
    sound: 'sound/cat.wav', 
    unused: true
  },

  {
    type: 'chicken',
    images: ['img/chicken1.jpg', 'img/chicken2.jpg', 'img/chicken3.jpg'], 
    sound: 'sound/chicken.wav', 
    unused: true
  },

  {
    type: 'cow',
    images: ['img/cow1.jpg', 'img/cow2.jpg', 'img/cow3.jpg'], 
    sound: 'sound/cow.wav', 
    unused: true
  },

  {
    type: 'dog',
    images: ['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg'], 
    sound: 'sound/dog.wav', 
    unused: true
  },

  {
    type: 'donkey',
    images: ['img/donkey1.jpg', 'img/donkey2.jpg', 'img/donkey3.jpg'], 
    sound: 'sound/donkey.wav', 
    unused: true
  },

  {
    type: 'duck',
    images: ['img/duck1.jpg', 'img/duck2.jpg', 'img/duck3.jpg'], 
    sound: 'sound/duck.mp3', 
    unused: true
  },

  {
    type: 'elephant',
    images: ['img/elephant1.jpg', 'img/elephant2.jpg', 'img/elephant3.jpg'], 
    sound: 'sound/elephant.wav', 
    unused: true
  },

  {
    type: 'goat',
    images: ['img/goat1.jpg', 'img/goat2.jpg', 'img/goat3.jpg'], 
    sound: 'sound/goat.mp3', 
    unused: true
  },

  {
    type: 'goose',
    images: ['img/goose1.jpg', 'img/goose2.jpg', 'img/goose3.jpg'], 
    sound: 'sound/goose.mp3', 
    unused: true
  },

  {
    type: 'horse',
    images: ['img/horse1.jpg', 'img/horse2.jpg', 'img/horse3.jpg'], 
    sound: 'sound/horse.wav', 
    unused: true
  },

  {
    type: 'leopard',
    images: ['img/leopard1.jpg', 'img/leopard2.jpg', 'img/leopard3.jpg'], 
    sound: 'sound/leopard.mp3', 
    unused: true
  },

  {
    type: 'lion',
    images: ['img/lion1.jpg', 'img/lion2.jpg', 'img/lion3.jpg'], 
    sound: 'sound/lion.wav', 
    unused: true
  },

  {
    type: 'pig',
    images: ['img/pig1.jpg', 'img/pig2.jpg', 'img/pig3.jpg'], 
    sound: 'sound/pig.wav', 
    unused: true
  },

  {
    type: 'polarBear',
    images: ['img/polarBear1.jpg', 'img/polarBear2.jpg', 'img/polarBear3.jpg'], 
    sound: 'sound/polarBear.wav', 
    unused: true
  },

  {
    type: 'rattlesnake',
    images: ['img/rattlesnake1.jpg', 'img/rattlesnake2.jpg', 'img/rattlesnake3.jpg'], 
    sound: 'sound/rattlesnake.mp3', 
    unused: true
  },

  {
    type: 'rooster',
    images: ['img/rooster1.jpg', 'img/rooster2.jpg', 'img/rooster3.jpg'], 
    sound: 'sound/rooster.wav', 
    unused: true
  },

  {
    type: 'sheep',
    images: ['img/sheep1.jpg', 'img/sheep2.jpg', 'img/sheep3.jpg'], 
    sound: 'sound/sheep.wav', 
    unused: true
  },

  {
    type: 'tiger',
    images: ['img/tiger1.jpg', 'img/tiger2.jpg', 'img/tiger3.jpg'], 
    sound: 'sound/tiger.wav', 
    unused: true
  },

  {
    type: 'wolf',
    images: ['img/wolf1.jpg', 'img/wolf2.jpg', 'img/wolf3.jpg'], 
    sound: 'sound/wolf.wav', 
    unused: true
  }

]