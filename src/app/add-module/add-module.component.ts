import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MeasurementService} from '../services/measurement.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {
  @Output() requestFlag = new EventEmitter();
  attachModuleFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private measurementService: MeasurementService) {
  }

  ngOnInit() {
    this.attachModuleFormGroup = this.fb.group({
      uuid: new FormControl(),
      name: new FormControl()
    });
  }

  addModule() {
    const module = {
      uuid: this.attachModuleFormGroup.get('uuid').value,
      name: this.attachModuleFormGroup.get('name').value
    };
    this.measurementService.addModule(module).subscribe(_ => {
      this.requestFlag.emit(true);
    });
  }
}
