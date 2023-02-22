import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InputModel} from "./models/input-model";
import {ConfigModel} from "./models/config-model";

@Component({
  selector: 'app-form-generation',
  templateUrl: './form-generation.component.html',
  styleUrls: ['./form-generation.component.scss']
})
export class FormGenerationComponent<T> implements OnInit {

  constructor() { }

  @Input() inputs? : Array<InputModel<T>>;
  @Input() config?: ConfigModel<T>;
  @Input() data?: Array<T>;

  ngOnInit(): void {

  }

}
