import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { GroupPhotoComponent } from "../group-photo/group-photo.component";
import { InfoComponent } from "../info/info.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BtnPrimaryComponent, NewsletterFormComponent, GroupPhotoComponent, InfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
