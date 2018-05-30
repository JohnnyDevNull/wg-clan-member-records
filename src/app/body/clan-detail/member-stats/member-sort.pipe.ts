import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msort',
  pure: false
})
export class MemberSortPipe implements PipeTransform {

  transform(value: any, propName1: string, propName2: string, dir: string): any {
    if (propName1 === propName2 || propName2 === 'battles') {
      return value.sort((a, b) => {
        if (+a[propName2] > +b[propName2]) {
          return dir === 'desc' ? -1 : 1;
        } else {
          return dir === 'desc' ? 1 : -1;
        }
      });
    } else if (propName1 !== propName2) {
      switch (propName1) {
        case 'winrate':
          return value.sort((a, b) => {
            const winRateA = +a[propName2].battles > 0
              ? (a[propName2].wins / a[propName2].battles) * 100
              : 0;
            const winRateB = +b[propName2].battles > 0
              ? (b[propName2].wins / b[propName2].battles) * 100
              : 0;
            if (+winRateA > +winRateB) {
              return dir === 'desc' ? -1 : 1;
            } else {
              return dir === 'desc' ? 1 : -1;
            }
          });
        case 'battles':
        case 'frags':
        case 'planes_killed':
        case 'max_damage_dealt':
          return value.sort((a, b) => {
            const a2 = a[propName2];
            const b2 = b[propName2];
            if (+a2[propName1] > +b2[propName1]) {
              return dir === 'desc' ? -1 : 1;
            } else {
              return dir === 'desc' ? 1 : -1;
            }
          });
      }
    } else {
      return value;
    }
  }

}
