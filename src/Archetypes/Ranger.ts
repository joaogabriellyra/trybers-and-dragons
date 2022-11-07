import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType = 'stamina'; 
  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}