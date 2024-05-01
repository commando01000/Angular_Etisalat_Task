import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, SharedComponentsRoutingModule],
  exports: [NavBarComponent, FooterComponent],
})
export class SharedComponentsModule {}
