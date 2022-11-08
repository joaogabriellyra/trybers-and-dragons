import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePointes: number;
  constructor() {
    super();
    this._lifePointes = 999;
  }
}