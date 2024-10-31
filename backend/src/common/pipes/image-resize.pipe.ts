import { Injectable, PipeTransform } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class ImageResizePipe implements PipeTransform {
  async transform(file: Express.Multer.File): Promise<Express.Multer.File> {
    const resizedBuffer = await sharp(file.buffer)
      .resize({ width: 1100 })
      .png({ effort: 5 })
      .toBuffer();

    file.buffer = resizedBuffer;
    return file;
  }
}
