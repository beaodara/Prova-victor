import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  id!: string;
  user!: User;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe((res) => {
      this.user = res.data;
    });
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe((res) => {
      alert('Usuário removido com sucesso!');
      this._router.navigate(['/users']);
    });
  }

  cancel() {
    this._router.navigate(['/users']);
  }
}
