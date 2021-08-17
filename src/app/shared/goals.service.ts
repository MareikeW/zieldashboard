import { Injectable } from '@angular/core';
import { Goal } from "./goal.model";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals: Goal[] = [];

  constructor() { }

  getAllGoals() {
    return this.goals;
  }

  addGoal(goal:Goal) {
    this.goals.push(goal);
  }
}
