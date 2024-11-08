import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../../services/socket.service';
import { OrderService } from './../../../../services/order.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit{
  orders: any[] = [];
  constructor(
    private orderService: OrderService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
      console.log(data);
    });
  }
}

