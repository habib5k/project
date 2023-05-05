
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
  
})
export class ProjetComponent {
public should_open =false ;

public should_open2 =false ;
  constructor(private router: Router) {}

  goToCat() {
  this.should_open=true ;
  }

  goToCategorie(){
    this.router.navigate(['/categories']);

  }

}
