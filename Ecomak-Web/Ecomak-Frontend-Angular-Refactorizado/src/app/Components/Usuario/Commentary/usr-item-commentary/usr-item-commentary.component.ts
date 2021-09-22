import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Commentary } from '../../../../Models/Commentary';
import { Promo } from '../../../../Models/Promo';
import { CommentaryService } from '../../../../Services/commentary.service';
import { PromoService } from '../../../../Services/promo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usr-item-commentary',
  templateUrl: './usr-item-commentary.component.html',
  styleUrls: ['./usr-item-commentary.component.css']
})
export class UsrItemCommentaryComponent implements OnInit {
  
  dateToComment;
  promo: Promo;
  commentaries:Commentary[];
  promoId;
  @Input() comment:Commentary;
  @Output() deleteComment: EventEmitter<Comment> = new EventEmitter();

  constructor(private commentaryService:CommentaryService,private promoService:PromoService, private route: ActivatedRoute, private router:  Router) { 
    this.promo=new Promo;
  }

  ngOnInit() {
    this.promoId = this.route.snapshot.paramMap.get("promoId");
    this.promoService.getPromo(this.promoId).subscribe(e => {
      this.promo = e;
    });
    this.dateToComment = this.comment.time;
  }

  setClasses() {
    let classes = {
    }
    return classes;
  }

}
