import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RoutesType } from 'src/app/core/enums/routes.enum';

interface Menu {
  label: string;
  route: string;
  selected: boolean;
}

@Component({
  selector: 'singu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuList: Array<Menu> = [
    { label: 'Início', route: 'home', selected: false },
    { label: 'Meus pedidos', route: 'orders', selected: false },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onActiveTab();
  }

  onSelectMenu(menu: Menu): void {
    this.menuList.map((item) => (item.selected = false));

    menu.selected = true;

    this.router.navigate([menu.route]);
  }

  onActiveTab(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = event.url;
        this.menuList.some((menu) =>
          route.includes(menu.route)
            ? (menu.selected = true)
            : (menu.selected = false)
        );
      }
    });
  }
}
