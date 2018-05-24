import { Player } from './player.model';
export class PlayerDetailService {
  private playerData: Player;

  public setPlayerData(playerData: Player) {
    this.playerData = playerData;
  }

  public getWinRate(type: string) {
    if (this.playerData.statistics[type].battles === 0) {
      return 0;
    }
    return ((this.playerData.statistics[type].wins / this.playerData.statistics[type].battles) * 100);
  }

  public getDamageAvg(type: string) {
    if (this.playerData.statistics[type].battles === 0) {
      return 0;
    }
    return this.playerData.statistics[type].damage_dealt / this.playerData.statistics[type].battles;
  }
}
