import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  listado = [];
  id= "";
  post :any;
 

  constructor(private activatedRouter : ActivatedRoute,private apirestService:ApirestService) { }

 async ngOnInit() {
    

    this.activatedRouter.paramMap.subscribe(async p => {
     
      this.id = p.get('id');


      this.apirestService.getComments(this.id);
      this.listado = this.apirestService.listado2;
    
    })
    await this.apirestService.getPost(this.id);
    this.post = this.apirestService.datos;
    

 
   
  }

}
