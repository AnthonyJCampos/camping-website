// Component class - serves as a base class for other components
export default class Component {
  // Constructor takes in props and initializes the state
  constructor(data) {
    // Make sure data are defined
    if (!data) {
      throw new Error('Component constructor called without data');
    }
    this._data = data;
  }

  render(parent) {
    if (!parent) {
      throw new Error('Parent element is required.');
    }

    // check if no data was provided
    if (!this._data || (Array.isArray(this._data) && this._data.length === 0)) {
      throw new Error('No Data to Render');
    }

    const markup = this._generateMarkup();
    this._parentElement = parent;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  } // end render

  _clear() {
    this._parentElement.innerHTML = '';
  } // end clear
}
