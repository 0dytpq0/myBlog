class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.text = '소개글을 입력해주세요.';
    // 추가적인 사용자 정보들을 필요에 따라 추가할 수 있습니다.
  }

  // Getter 및 Setter 메서드를 추가하여 속성에 접근할 수 있도록 합니다.
  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  getText() {
    return this.text;
  }

  setText(text) {
    this.text = text;
  }

  // 기타 사용자 관련 메서드들을 추가할 수 있습니다.
}

export default User;
