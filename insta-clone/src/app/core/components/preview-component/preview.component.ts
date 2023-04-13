import { Component, Input, OnInit } from '@angular/core';
import { PreviewItem } from 'src/app/model/preview-item.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() previewItem!: PreviewItem;
  constructor() {}

  ngOnInit(): void {}
}
