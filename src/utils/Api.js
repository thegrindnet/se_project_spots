class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]).then(
      ([user, cards]) => {
        return { user, cards };
      }
    );
  }

  _request(endpoint, options = {}) {
    const finalOptions = {
      headers: this._headers,
      options: this.options,
    };
    const url = `${this._baseUrl}${endpoint}`;
    return fetch(url, finalOptions).then(this._handleServerResponse);
  }

  getInitialCards() {
    return this._request("/cards");
  }

  getUserInfo() {
    return this._request("/users/me");
  }

  // getInitialCards() {
  //   return fetch(`${this._baseUrl}/cards`, {
  //     headers: this._headers,
  //   }).then(this._handleServerResponse);
  // }

  // getUserInfo() {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     headers: this._headers,
  //   }).then(this._handleServerResponse);
  // }

  // editUserInfo({ name, about }) {
  //   return this._request("/users/me", {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       name,
  //       about,
  //     }),
  //   });
  // }

  editUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._handleServerResponse);
  }

  editAvatarInfo(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._handleServerResponse);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._handleServerResponse);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  cardLikeStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // Promise.reject(`Error: ${res.status}`);
  }
}
export default Api;
