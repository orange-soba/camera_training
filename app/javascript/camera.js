function camera () {
  const video = document.getElementById('camera');
  const canvas = document.getElementById('picture');
  const shutter = document.getElementById('shutter');

  // カメラ設定
  const constrains = {
    audio: false,
    video: {
      width: 300,
      height: 200,
      facingMode: "user" //フロントカメラ
      // facingMode: { exact: "environment" } // リアカメラ
    }
  };

  // カメラを<video>と同期
  navigator.mediaDevices.getUserMedia(constrains)
  .then( (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
  })
  .catch( (err) => {
    console.log(err.name + ": " + err.message);
  });

  // カメラの撮影
  shutter.addEventListener('click', () => {
    const ctx = canvas.getContext("2d");

    // 演出
    video.pause();
    // 0.5秒後にカメラを再起動
    setTimeout( () => {
      video.play();
    }, 500);

    // canvasに画像を貼り付ける
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  });
};

window.addEventListener('turbo:load', camera);