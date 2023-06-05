

function create(data) {
  console.log('Criando dados: ', data);
}


function read(id) {
  console.log('Lendo dados de ID: ', id);
}


function update(id, data) {
  console.log('Atualizando dados de ID: ', id, 'com os dados: ', data);
}

function create(data) {
  console.log('Criando dados: ', data);
}
function read(id) {
  console.log('Lendo dados de ID: ', id);
}
function update(id, data) {
  console.log('Atualizando dados de ID: ', id, 'com os dados: ', data);
}


function create(data) {
  console.log('Criando dados: ', data);
}
function read(id) {
  console.log('Lendo dados de ID: ', id);
}
function update(id, data) {
  console.log('Atualizando dados de ID: ', id, 'com os dados: ', data);
}
function create(data) {
  console.log('Criando dados: ', data);
}
function read(id) {
  console.log('Lendo dados de ID: ', id);
}
function update(id, data) {
  console.log('Atualizando dados de ID: ', id, 'com os dados: ', data);
}


// Função Delete

function delete (id) {
  console.log('Deletando dados de ID: ', id);
}

// Função Create 	  	function create(data) { 	    console.log('Criando dados: ', data); 	} 	  	// Função Read 	  	function read(id) { 	    console.log('Lendo dados de ID: ', id); 	} 	  	// Função Update 	  	function update(id, data) { 	    console.log('Atualizando dados de ID: ', id, 'com os dados: ', data); 	} 	  	// Função Delete 	  	function delete(id) { 	    console.log('Deletando dados de ID: ', id); 	}

	# Create
	def create(nome, idade):
print("Criando registro de nome: ", nome, "e idade: ", idade)
	 
	# Read
	def read(id):
print("Lendo registro de id: ", id)
	 
	# Update
	def update(id, nome, idade):
print("Atualizando registro de id: ", id, "novo nome: ", nome, "e nova idade: ", idade)
	 
	# Delete
	def delete (id):
print("Deletando registro de id: ", id)


  ```
	import { Component, OnInit } from '@angular/core';
	import { HttpClient } from '@angular/common/http';
	 
	@Component({
	  selector: 'app-infinity-scroll',
	  templateUrl: './infinity-scroll.component.html',
	  styleUrls: ['./infinity-scroll.component.css']
	})
	export class InfinityScrollComponent implements OnInit {
	 
	  // Variáveis
	  items: any[] = [];
	  page = 1;
	  loading = false;
	 
	  constructor(private http: HttpClient) { }
	 
	  ngOnInit() {
	    this.load

	 	import { Component, OnInit } from '@angular/core';
	import { HttpClient } from '@angular/common/http';
	 
	@Component({
	  selector: 'app-infinity-scroll',
	  templateUrl: './infinity-scroll.component.html',
	  styleUrls: ['./infinity-scroll.component.css']
	})
	export class InfinityScrollComponent implements OnInit {
	 
	  // Variáveis
	  items: any[] = [];
	  page = 1;
	  loading = false;
	 
	  constructor(private http: HttpClient) { }
	 
	  ngOnInit() {
	    this.load