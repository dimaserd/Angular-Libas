import {Pipe, PipeTransform} from "@angular/core";
import {spritesHash} from "../../sprites-hash";
import {SpriteIdsType} from "../../sprites-ids.type";

@Pipe({
  name: 'spriteIconPath',
  standalone: true,
})
export class SpriteIconPathPipe implements PipeTransform {
  transform(id: SpriteIdsType): string {
    return `assets/sprites/svg-sprite-${spritesHash.symbol}.svg#${id}`;
  }
}
