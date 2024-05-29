import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IPiece, ISegment } from '../../services/piece.model';
import { PieceService } from '../../services/piece.service';
import { DetailPartial } from './details.partial';
@Component({

  templateUrl: './details.component.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule, DetailPartial]
})
export class PieceDetailsComponent {

  // in order to read the route input without subscribing to routeParams, is use input, and change routing options (check app.routes)
  @Input() id: string;

  // use an observable for data
  piece$: Observable<IPiece>;
  chosenSegment$: Observable<ISegment>;

  constructor(private pieceService: PieceService) {
    //
  }
  ngOnInit(): void {
    // use async pipe
    this.piece$ = this.pieceService.GetPiece(this.id);
  }

  showDetails(segment: string) {
    this.chosenSegment$ = this.piece$.pipe(
        map(res => res.segments), 
        map(res => res.find(res => res.name == segment))
    );
  }
}
