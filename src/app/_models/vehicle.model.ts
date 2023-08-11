import { Driver } from "./driver.model";

export class Vehicle {
  vehicleid!: number;
  modelno!: string;
  company!: string;
  description!: string;
  driver!: Driver;

  constructor(){}
}
