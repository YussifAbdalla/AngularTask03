import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IPiece } from '../../services/piece.model';
import { PieceService } from '../../services/piece.service';

@Component({

  templateUrl: './list.component.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule]
})
export class PieceListComponent implements OnInit {

  // TASK:02 get list of bits from a service. let the service return static json
  // Bind the list to the returned result
  // Every item in the list should have a link to the details page

  // always start with an observable for the list
  pieces$: Observable<IPiece[]>;

  constructor(private pieceService: PieceService) {
    //
  }
  ngOnInit(): void {
    // don't subscribe, always use async pipe whenver possible
    this.pieces$ = this.pieceService.GetPieces();
  }
}
