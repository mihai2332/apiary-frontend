import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {AdminTableDTO} from '../model/AdminTableDTO';
import {MatTable} from '@angular/material';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['name', 'username', 'email', 'count', 'actions'];
  dataSource: AdminTableDTO[] = [];
  tempDataSource: AdminTableDTO[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      users.forEach(user => {
        this.userService.getModuleCount(user.username).subscribe(count => {
          this.tempDataSource.push({user, modulesCount: count});
          this.dataSource = [...this.tempDataSource];
        });
      });
    });
  }

  deleteUser(adminTableDTO: AdminTableDTO) {
    this.userService.deleteUser(adminTableDTO.user.username).subscribe(_ => {
      this.dataSource.splice(this.dataSource.indexOf(adminTableDTO), 1);
      this.dataSource = [...this.dataSource];
    });
  }
}
