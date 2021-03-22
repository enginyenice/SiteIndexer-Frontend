import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OperationOneComponent } from './components/operation-one/operation-one.component';
import { OperationTwoComponent } from './components/operation-two/operation-two.component';
import { OperationThreeComponent } from './components/operation-three/operation-three.component';
import { OperationFourComponent } from './components/operation-four/operation-four.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
registerLocaleData(tr);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OperationOneComponent,
    OperationTwoComponent,
    OperationThreeComponent,
    OperationFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzAlertModule,
    NzGridModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzSpinModule,
    NzTableModule,
    NzTagModule,
    NzListModule,
    NzNotificationModule,
    NzCollapseModule,
    NzBadgeModule,
    NzStatisticModule,
  ],

  providers: [{ provide: NZ_I18N, useValue: tr_TR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
