import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb',
  templateUrl: './ngb.component.html',
  styleUrls: ['./ngb.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NgbComponent  {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content:any) {
    this.modalService.open(content);
  }

  

}
