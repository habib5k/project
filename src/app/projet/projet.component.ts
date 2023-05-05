import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
  
})
export class ProjetComponent {
public should_open =false ;

public should_open2 =false ;
public should_open3= false ;
  constructor(private router: Router) {}

  goToCat() {
  this.should_open=true ;
  }

  goToCategorie(){
    
  this.should_open2=true ;

  }
  goToProd(){

    this.should_open3=true;
  }

}
