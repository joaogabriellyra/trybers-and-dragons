import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly _name: string;
  readonly _special = 0;
  readonly _cost = 0;
  constructor(
    name: string,
  ) {
    this._name = name;
  }

  get name(): string { return this._name; }
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented'); 
  }

  abstract get energyType(): EnergyType;
}