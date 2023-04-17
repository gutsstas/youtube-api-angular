/* eslint-disable @ngrx/no-store-subscription */
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/auth/services/customvalidation.service';
import { Store } from '@ngrx/store';
import { addCards } from 'src/app/redux/actions/app.actions';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  createCardForm: FormGroup;

  location: Location;

  errorTitle(): string {
    if (
      this.createCardForm.controls['title'].value.length <= 3 &&
      this.createCardForm.controls['title'].value.length > 0
    )
      return 'The title is too short';
    else if (this.createCardForm.controls['title'].value.length > 20)
      return 'The title is too long';
    else return 'Please enter a title';
  }

  getDate() {
    return new Date();
  }

  createID(): string {
    const symbol =
      'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789';
    let id = '';
    for (let i = 0; i < 11; i++) {
      const index = Math.floor(Math.random() * symbol.length);
      id += symbol[index];
    }
    return id;
  }

  onSubmit() {
    if (this.createCardForm.status !== 'VALID') return;

    const result = {
      id: {
        kind: 'user#video',
        videoId: this.createID(),
      },
      snippet: {
        linkVideo: this.createCardForm.controls['link'].value,
        publishedAt: new Date().toString(),
        title: this.createCardForm.controls['title'].value,
        description: this.createCardForm.controls['description'].value,
        thumbnails: {
          default: {
            url: this.createCardForm.controls['img'].value,
            width: 500,
            height: 500,
          },
          high: {
            url: this.createCardForm.controls['img'].value,
            width: 500,
            height: 500,
          },
        },
      },
      statistics: {
        viewCount: '0',
        likeCount: '0',
        dislikeCount: '0',
        favoriteCount: '0',
        commentCount: '0',
      },
    };

    this.store.dispatch(addCards({ card: result }));
    this.dataService.initialState.push(result);
    this.router.navigate(['/']);
  }

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private store: Store,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.createCardForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      description: ['', [Validators.maxLength(255)]],
      img: ['', [Validators.required, this.customValidator.checkImageURL()]],
      link: ['', [Validators.required, this.customValidator.checkURL()]],
    });
  }
}
