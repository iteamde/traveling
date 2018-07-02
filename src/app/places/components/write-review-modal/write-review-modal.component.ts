import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-write-review-modal',
  templateUrl: './write-review-modal.component.html',
  styleUrls: ['./write-review-modal.component.scss']
})
export class WriteReviewModalComponent implements OnInit {

  urlTo: string;
  showInputField = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.urlTo = this.router.url.split('/').slice(1, 3).join('/');
  }

  toggleInputField(e) {
    e.preventDefault();
    this.showInputField = !this.showInputField;
  }

  closeModal() {
    this.router.navigate([`/${this.urlTo}`]);
  }
}
