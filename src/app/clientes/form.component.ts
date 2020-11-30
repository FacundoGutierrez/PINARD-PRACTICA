import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {


   cliente: Cliente = new Cliente();
   titulo: string = "Proyecto";
  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      response => {
        debugger;
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo cliente', `Cliente ${this.cliente.nombre} creado con éxito!`, 'success')
      }
    );
  }
  
  public cargarClientes(): void {
    this.activatedRoute.params.subscribe(
      params => {
        debugger;
        let id = params['id']
        if (id) {
          this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
        }
      }
    );
  }
  public update(): void{
    this.clienteService.update(this.cliente).subscribe(
      response => {
        debugger;
        this.router.navigate(['/clientes'])
        swal.fire('Cliente', `Cliente ${this.cliente.nombre} actualizado con éxito!`, 'success')
      }
     );
  }
  }
  


