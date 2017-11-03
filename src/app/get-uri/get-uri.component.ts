import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-get-uri',
  templateUrl: './get-uri.component.html',
  styleUrls: ['./get-uri.component.css']
})
export class GetUriComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(activatedRoute);
    console.log(router.url);
    console.log(activatedRoute.snapshot);
  }

  params;
  abc = 'empty';
  def = 'empty';

  ngOnInit() {
    console.log('get uri oninit');
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('queryParams');
      this.abc = params['abc'];
      console.log('abc:' + this.abc);
      this.def = params['def'];
      console.log('def:' + this.def);
    });
  }
}

  //   this.activatedRoute.params.subscribe((params: Params) => {
  //     console.log('params');
  //     this.abc = params['abc'];
  //     console.log('abc:' + this.abc);
  //     this.def = params['def'];
  //     console.log('def:' + this.def);
  //   });
  // }

  // http://test.angularelite.org?abc=1234&def=567

  // let params = URLSearchParams(url)
  // let abc = params.get('abc');
  // let abc = params.get('def');


