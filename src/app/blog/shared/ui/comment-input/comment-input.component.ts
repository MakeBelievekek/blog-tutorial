import {Component, EventEmitter, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss']
})
export class CommentInputComponent implements OnInit {
  @Input() loggedIn: boolean | null = false;
  @Output() notLoggedIn = new EventEmitter<void>();
  @Output() commentEntered = new EventEmitter<string>()

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  form = this.fb.group({
    comment: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  constructor(private _ngZone: NgZone, private fb: FormBuilder,) {
  }

  ngOnInit(): void {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onCommentTextAreaFocus() {
    if (!this.loggedIn) {
      this.notLoggedIn.emit();
    }
  }

  onComment() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }
    this.commentEntered.emit(this.form.controls.comment.value);
  }
}
