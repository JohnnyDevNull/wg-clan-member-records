import { Player } from './player.model';
export class PlayerDetailService {
  private playerData: Player;

  public setPlayerData(playerData: Player) {
    this.playerData = playerData;
  }

  public getWinRate(type: string) {
    switch (type) {
      case 'pve':
        return (this.playerData.statistics.pve.wins / this.playerData.statistics.pve.battles) * 100;
      case 'pvp':
        return (this.playerData.statistics.pvp.wins / this.playerData.statistics.pvp.battles) * 100;
      case 'pvp_div2':
        return (this.playerData.statistics.pvp_div2.wins / this.playerData.statistics.pvp_div2.battles) * 100;
      case 'pvp_div3':
        return (this.playerData.statistics.pvp_div3.wins / this.playerData.statistics.pvp_div3.battles) * 100;
      case 'pvp_solo':
        return (this.playerData.statistics.pvp_solo.wins / this.playerData.statistics.pvp_solo.battles) * 100;
    }
  }

  public getDamageAvg(type: string) {
    switch (type) {
      case 'pve':
        return (this.playerData.statistics.pve.damage_dealt / this.playerData.statistics.pve.battles);
      case 'pvp':
        return (this.playerData.statistics.pvp.damage_dealt / this.playerData.statistics.pvp.battles);
      case 'pvp_div2':
        return (this.playerData.statistics.pvp_div2.damage_dealt / this.playerData.statistics.pvp_div2.battles);
      case 'pvp_div3':
        return (this.playerData.statistics.pvp_div3.damage_dealt / this.playerData.statistics.pvp_div3.battles);
      case 'pvp_solo':
        return (this.playerData.statistics.pvp_solo.damage_dealt / this.playerData.statistics.pvp_solo.battles);
    }
  }
}
