import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-reservar-espacios',
  templateUrl: './reservar-espacios.component.html',
  styleUrls: ['./reservar-espacios.component.css']
})
export class ReservarEspaciosComponent implements OnInit {

  categorias: Categoria[]=[];

  constructor(private categoriaservice:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaservice.getCategoriasInfo().subscribe(
      e => {this.categorias=e; console.log(this.categorias)}
    );
  }

}
