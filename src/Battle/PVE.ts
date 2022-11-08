import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  _player1: Fighter;
  _player2: Array<SimpleFighter | Monster>;
  constructor(
    player1: Fighter,
    player2: Array<SimpleFighter | Monster>,
  ) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  findEnvironments(): SimpleFighter | undefined {
    return this._player2.find((p2) => p2.lifePoints > 0);
  }

  public fight(): number {
    let environments = this.findEnvironments();
    while (this._player1.lifePoints > 0 && environments !== undefined) {
      this._player1.attack(environments);
      environments.attack(this._player1);
      environments = this.findEnvironments();
    }
    return super.fight();
  }
}