import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IIngredient } from '../../services/bit.model';

@Component({
    selector: 'bit-detail',
  templateUrl: './details.partial.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})

export class DetailPartial {
 
  @Input() ingredient$: Observable<IIngredient>;

}
