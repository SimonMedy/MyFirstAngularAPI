import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PokemonManagementService } from '../../app/services/pokemon-management.service';
import { Pokemon } from '../../app/services/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  constructor(private formBuilder: FormBuilder, private pokemonManagementService: PokemonManagementService, private router: Router) {}
  dataForm = this.formBuilder.group({
    nom:''
  })

  addPokemon(nomPokemon:any){
    this.pokemonManagementService.addPokemon(nomPokemon).subscribe();
  }

  async onSubmit(){
    if (this.dataForm.value.nom == '') {
      console.log("nom vide");
    }else{
      await this.addPokemon(this.dataForm.value);
      window.alert('Le pokemon ' + this.dataForm.value.nom + ' a bien été ajouté')
    }  
    window.location.reload()
  }

}
