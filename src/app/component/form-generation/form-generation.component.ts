import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InputExtendModel, InputModel} from "./models/input-model";
import {ConfigModel} from "./models/config-model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-form-generation',
  templateUrl: './form-generation.component.html',
  styleUrls: ['./form-generation.component.scss']
})
export class FormGenerationComponent<T> implements OnInit, OnChanges {



  ngOnChanges(changes: SimpleChanges): void {
  }

  @Input() inputs?: Array<InputModel<T>>;
  @Input() config?: ConfigModel<T>;
  @Input() data?: Array<T>;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }


  extentInputs?: Array<InputExtendModel<T>>;

  formGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.extentInputs = this.inputs as Array<InputExtendModel<T>>;
    this.extentInputs?.forEach(input => {
      if (input) {
        let inputName = input.Name?.toString().split('.')[input.Name?.toString().split('.').length - 1] as string;
        input.FormControlName = inputName;
        let form: FormControl = new FormControl(input.Value, input.Validations);
        this.formGroup?.addControl(inputName as string, form);
        input.FormControl = form;
      }
    });

    this.formGroup.valueChanges.subscribe(res => {
      debugger;
    });

  }

  ShowErrors(form: FormControl) : string|null {
    if (form.errors && (form.dirty || form.touched)) {
      let list:Array<string>=new Array<string>();
      Object.keys(form.errors).forEach(key=>{
        list.push(`<span class="error-input">${key}</span>`)
      })
      return list.join(' ');
    }else{
      return  null;
    }
  }

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;



  // Select Multi DateTime
  onDateSelection(date: NgbDate,element:any) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      element.close();
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
