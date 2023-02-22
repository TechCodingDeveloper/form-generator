import {Component, Input, OnInit} from '@angular/core';
import {InputModel} from "./models/input-model";
import {ConfigModel} from "./models/config-model";

@Component({
  selector: 'app-form-generation',
  templateUrl: './form-generation.component.html',
  styleUrls: ['./form-generation.component.scss']
})
export class FormGenerationComponent<T> implements OnInit {

  constructor() { }

  @Input() inputs : Array<InputModel<T>> | undefined ;
  @Input() config: ConfigModel<T> | undefined ;
  @Input() Data: Array<T> | undefined ;

  ngOnInit(): void {

  }

}
