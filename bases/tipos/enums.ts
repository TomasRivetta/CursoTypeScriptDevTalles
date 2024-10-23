(() => {
  enum AudioLevel {
    min, // 0
    medium, // 1
    max, // 3
  }

  let currentAudio = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
