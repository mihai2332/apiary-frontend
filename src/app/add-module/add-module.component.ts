import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MeasurementService} from '../services/measurement.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {
  attachModuleFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private measurementService: MeasurementService) {
  }

  ngOnInit() {
    this.attachModuleFormGroup = this.fb.group({
      uuid: new FormControl()
    });
  }

  addModule() {
    this.measurementService.addModule(this.attachModuleFormGroup.get('uuid').value).subscribe();
  }
}
