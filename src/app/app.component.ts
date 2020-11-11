import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper/lib/interfaces/image-cropped-event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngImageCrop';

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imagemInicialUrl: any = './assets/img/ImagemNaoEncontrada.jpg';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent): any {
      this.croppedImage = event.base64;
      console.log('cropped');
  }
  imageLoaded(): any {
      /* show cropper */
      console.log('Imagem Carregada');
  }
  cropperReady(): any {
      /* cropper ready */
      console.log('Cropper Iniciado');

  }
  loadImageFailed(): any {
      /* show message */
      console.log('imagem não foi carregada');
  }
}
