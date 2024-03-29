import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const KEEPER_DAO_DEFINITION = appDefinition({
  id: 'keeper-dao',
  name: 'KeeperDAO',
  description: `KeeperDAO is building a decentralized protocol for Keepers that will help make Ethereum a more secure, egalitarian, and profitable network for all.`,
  url: 'https://www.keeperdao.com/',
  links: {
    github: 'https://github.com/keeperdao',
    twitter: 'https://twitter.com/Keeper_DAO',
    telegram: 'https://t.me/keeperdao',
    discord: 'https://discord.gg/3JUgvyyNhA',
    medium: 'https://medium.com/keeperdao',
  },
  groups: {
    v2Pool: { id: 'v2-pool', type: GroupType.TOKEN, label: 'KeeperDAO' },
    v3Pool: { id: 'v3-pool', type: GroupType.TOKEN, label: 'KeeperDAO' },
    farm: { id: 'farm', type: GroupType.POSITION, label: 'KeeperDAO' },
  },
  tags: [AppTag.YIELD_AGGREGATOR, AppTag.DECENTRALIZED_EXCHANGE],
  supportedNetworks: { [Network.ETHEREUM_MAINNET]: [AppAction.VIEW] },
});

@Register.AppDefinition(KEEPER_DAO_DEFINITION.id)
export class KeeperDaoAppDefinition extends AppDefinition {
  constructor() {
    super(KEEPER_DAO_DEFINITION);
  }
}
