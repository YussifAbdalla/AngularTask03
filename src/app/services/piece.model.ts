 export interface IPiece {
    id: string, 
    name: string, 
    description: string, 
    segments: Array<ISegment>
 }
  
 export interface ISegment {
     id: string, 
     name: string, 
     from: string,
     to: string
  }