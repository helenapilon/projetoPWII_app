import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-api-noticias',
  templateUrl: './api-noticias.page.html',
  styleUrls: ['./api-noticias.page.scss'],
})
export class ApiNoticiasPage{

  articles;

  constructor(private apiService: ApiService){}

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}


