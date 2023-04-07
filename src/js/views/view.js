export default class View {
  _data;
  render(data, render = true) {
    // check if no data was provided
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();
    // This clears the spinner element by clearing all elements in the
    // container

    if (!render) {
      return markup;
    }
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  } // end render

  _clear() {
    this._parentElement.innerHTML = "";
  } // end clear
}
