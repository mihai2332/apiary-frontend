import {Component, EventEmitter, Injector, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MeasurementService} from '../services/measurement.service';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {
  @Output() requestFlag = new EventEmitter();
  attachModuleFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private measurementService: MeasurementService,
              private injector: Injector) {
  }

  ngOnInit() {
    this.attachModuleFormGroup = this.fb.group({
      uuid: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
  }

  addModule() {
    const module = {
      uuid: this.attachModuleFormGroup.get('uuid').value,
      name: this.attachModuleFormGroup.get('name').value
    };
    if (module.uuid === '' || module.name === '') {
      const notificationService = this.injector.get(NotificationService);
      notificationService.notify('UUID or Name not filled!');
    } else {
      this.measurementService.addModule(module).subscribe(_ => {
        this.requestFlag.emit(true);
      });
    }
  }

  get uuid() {
    return this.attachModuleFormGroup.get('uuid');
  }

  get name() {
    return this.attachModuleFormGroup.get('name');
  }
}
