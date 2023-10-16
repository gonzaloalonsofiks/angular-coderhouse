import { NgModule } from '@angular/core'; // Ok
import { BrowserModule } from '@angular/platform-browser'; // Ok
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Ok
import { FooterComponent } from './footer/footer.component'; // Ok
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashModule } from './dash/dash.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DashModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
