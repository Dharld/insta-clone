import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewChildren,
  ElementRef,
  Renderer2,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputBoxComponent,
    },
  ],
})
export class InputBoxComponent
  implements OnInit, ControlValueAccessor, AfterViewInit
{
  @Input() checkMark = false;
  @Input() readOnly = false;
  @Input() formControlInput = '';
  @Input() placeholder = '';
  @Input() name = '';
  @Input() value = '';
  @Input() type: 'text' | 'password' = 'text';
  @ViewChild('in') in!: ElementRef;
  onChange = (value: any) => {};
  onTouched = () => {};
  @Input() disabled = false;
  touched = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.in.nativeElement.value.length > 0 &&
      this.renderer.setProperty(this.in.nativeElement, 'class', 'dirty');
  }

  writeValue(value: any): void {
    if (!this.disabled && this.readOnly != true) {
      this.markAsTouched();
      this.renderer.setProperty(
        this.elementRef.nativeElement.childNodes[0].childNodes[0],
        'value',
        value
      );
      this.onChange(value);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
