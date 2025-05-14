const auth = firebase.auth();

document.getElementById("google-login").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      console.log(`Đăng nhập thành công: ${result.user.displayName}`);
      // Chuyển sang trang mới
      window.location.href = "home.html";
    })
    .catch(error => {
      alert("Lỗi đăng nhập: " + error.message);
    });
});

document.getElementById("microsoft-login").addEventListener("click", () => {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  auth.signInWithPopup(provider)
    .then(result => {
      console.log(`Đăng nhập thành công: ${result.user.displayName}`);
      // Chuyển sang trang mới
      window.location.href = "home.html";
    })
    .catch(error => {
      alert("Lỗi đăng nhập: " + error.message);
    });
});