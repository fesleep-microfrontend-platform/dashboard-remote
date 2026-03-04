import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  UiButtonComponent,
  UiCardComponent,
  UiStackComponent,
} from '@fesleep-microfrontend-platform/ui-design-system';

@Component({
  selector: 'app-dashboard',
  imports: [TranslateModule, UiButtonComponent, UiCardComponent, UiStackComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  activeUsers = '';
  newSignups = '';
  conversionRate = '';

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(): void {
    this.activeUsers = Math.floor(500 + Math.random() * 4500).toLocaleString();
    this.newSignups = String(Math.floor(10 + Math.random() * 190));
    this.conversionRate = (1 + Math.random() * 7).toFixed(1) + '%';
  }
}
