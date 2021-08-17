import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../shared/goals.service';
import { NgForm } from '@angular/forms';
import { Goal } from '../shared/goal.model';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss']
})
export class GoalFormComponent implements OnInit {
  goals: Goal[] = [];
  show = false;

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.goals = this.goalsService.getAllGoals();
  }

  onFormSubmit(form: NgForm) {
    if (form.value.name) {
      this.goalsService.addGoal(new Goal(
        form.value.name,
        form.value.reason,
        form.value.deadlineOne,
        form.value.deadlineDescriptionOne,
        form.value.deadlineTwo,
        form.value.deadlineDescriptionTwo,
        form.value.deadlineThree,
        form.value.deadlineDescriptionThree,
        form.value.deadlineFour,
        form.value.deadlineDescriptionFour,
      ));

      form.reset();
    }
  }
}
