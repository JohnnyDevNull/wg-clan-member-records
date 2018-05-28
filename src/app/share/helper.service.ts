export class HelperService {
  public roundNumberPrecision(num: number, prec: number): string {
    return parseFloat(String((Math.round(num * 100) / 100))).toFixed(prec);
  }
}
