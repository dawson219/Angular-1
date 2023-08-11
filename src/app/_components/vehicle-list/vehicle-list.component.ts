import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  list: any[] = [];
  formData: any = {
    modelno: "",
    company: "",
    description: "",
    driver: {
        name: "",
        contactno: null,
    }
  }
  constructor(private service: APIService) {}

  ngOnInit() {
    this.service.getVehicleList().subscribe(
      (data) => {
        this.list = data;
      },
      (error) => {}
    );
  }

  deleteVehicle(id: number) {
    this.service.deleteVehicle(id).subscribe(
      (data: string) => {
        alert(data);

        this.service.getVehicleList().subscribe(
          (data) => {
            this.list = data;
          },
          (error) => {}
        );
      },
      (error) => {
        alert(error.error.text);

        this.service.getVehicleList().subscribe(
          (data) => {
            this.list = data;
          },
          (error) => {}
        );
      }
    );
  }
}
