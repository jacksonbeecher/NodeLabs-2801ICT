import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  routeParamsSubscription;
  id: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.id = params.get('id');
    });
  }
  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
