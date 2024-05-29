import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ISegment } from '../../services/piece.model';
@Component({
    selector: 'piece-detail',
  templateUrl: './details.partial.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})

export class DetailPartial {
 
  @Input() segment$: Observable<ISegment>;

}
