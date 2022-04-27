import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = 'Bienvenido a Angular'

  users: string[] = []
  descriptions: string[] = []
  img = 'https://source.unsplash.com/random'

  activited: boolean = true;
  name: string = 'andres'
  age: number = 25


  addUser(newUser: any) {
    // this.users.push(newUser.value) push - agrega elemento al final
    console.log(newUser.value);

    this.users.unshift(newUser.value)  // unshift - agrega elemento al incio
    newUser.value = '' // limpia
    newUser.focus() // posicion del cursor
    return false
  }

  addDescription(newDescription: any) {
    console.log(newDescription.value);

    this.descriptions.unshift(newDescription.value)
    newDescription.value = ''
    return false
  }


  deleteUser(user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1)
      }
    }
  }
  ngOnInit(): void {
  }

}
