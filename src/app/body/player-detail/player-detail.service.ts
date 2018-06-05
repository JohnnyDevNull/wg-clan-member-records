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
    return (this.playerData.statistics[type].wins / this.playerData.statistics[type].battles) * 100;
  }

  public getDamageAvg(type: string) {
    if (this.playerData.statistics[type].battles === 0) {
      return 0;
    }
    return this.playerData.statistics[type].damage_dealt / this.playerData.statistics[type].battles;
  }

  public getXpAvg(type: string) {
    if (this.playerData.statistics[type].battles === 0) {
      return 0;
    }
    return this.playerData.statistics[type].xp / this.playerData.statistics[type].battles;
  }

  public getFragsAvg(type: string) {
    if (this.playerData.statistics[type].battles === 0) {
      return 0;
    }
    return this.playerData.statistics[type].frags / this.playerData.statistics[type].battles;
  }

  public getPlanesAvg(type: string) {
    if (this.playerData.statistics[type].battles === 0) {
      return 0;
    }
    return this.playerData.statistics[type].planes_killed / this.playerData.statistics[type].battles;
  }

  public getFieldValue(type: string, key: string) {
    const stats = this.playerData.statistics[type];
    return stats[key];
  }
}
