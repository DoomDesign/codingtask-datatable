import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './components/nav-menu-item/nav-menu-item.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTablePageComponent } from './components/pages/data-table-page/data-table-page.component';
import { AgGridModule } from 'ag-grid-angular';
import { ApiService } from './services/api.service';
import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DataTableImageCellRendererComponent } from './components/data-table-image-cell-renderer/data-table-image-cell-renderer.component';
import { NgOptimizedImage } from '@angular/common';
import { ContainerComponent } from './components/layout/container/container.component';
import { LoadingIndicatorComponent } from './components/layout/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    DataTableComponent,
    DataTablePageComponent,
    FooterComponent,
    DataTableImageCellRendererComponent,
    ContainerComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		AgGridModule,
		NgOptimizedImage
  ],
  providers: [
		importProvidersFrom(HttpClientModule),
		ApiService,
		ProductsService,
		UsersService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
