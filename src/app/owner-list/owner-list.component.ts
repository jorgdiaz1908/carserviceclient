import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;

  constructor(private ownerService: OwnerService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data["_embedded"]["owners"];
      for(var i=0;i<this.owners.length;i++){
        var a = this.owners[i].id=this.owners[i]["_links"]["self"]["href"];
        a = a.substring(a.lastIndexOf("/")+1)
        this.owners[i].id=a;
      }
    });
  }
}
