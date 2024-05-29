import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IBit } from '../../services/bit.model';

@Component({
    selector: 'bit-card',
  templateUrl: './card.partial.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})
export class CardPartial  {

    @Input() bit: IBit; 
}
