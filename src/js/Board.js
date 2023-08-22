export default class Board {
  constructor() {
    this.size = 4;
    this.init(this.size);
  }

  init(size) {
    const field = document.createElement('div');
    for (let i = 0; i < size * size; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('id', i);
      field.append(cell);
    }
    field.className = 'field';
    const body = document.querySelector('body');
    body.append(field);
    field.style.setProperty('--side', size);
  }
}
