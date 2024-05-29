import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IBit, IIngredient } from '../../services/bit.model';
import { BitService } from '../../services/bit.service';
import { DetailPartial } from './details.partial';
@Component({

    templateUrl: './details.component.html'
    , changeDetection: ChangeDetectionStrategy.OnPush
	 , standalone: true
	 , imports: [CommonModule, RouterModule, DetailPartial]
	 })
export class BitDetailsComponent {

    @Input() id: string;

    bit$: Observable<IBit>;
    chosenIngredient$: Observable<IIngredient>;
    
    constructor(private bitService: BitService) {
        
    }

    showDetails(ingredient: string) {
        this.chosenIngredient$ = this.bit$.pipe(
            map(res => res.ingredients), 
            map(res => res.find(res => res.name == ingredient))
        );
    }

    ngOnInit(): void {
        this.bit$ = this.bitService.GetBit(this.id);
    }
}
