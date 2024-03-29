import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const TEDDY_CASH_DEFINITION = appDefinition({
  id: 'teddy-cash',
  name: 'Teddy Cash',
  description: 'Borrow up to 90% on your AVAX with Teddy, a decentralized borrowing protocol on Avalanche',
  url: 'https://teddy.cash/',
  links: {
    github: 'https://github.com/teddy-cash/',
    twitter: 'https://twitter.com/teddycashlive',
    discord: 'https://discord.gg/TJXnyPXQxf',
    telegram: 'https://t.me/teddycashofficial',
    medium: 'https://medium.com/teddy-cash',
  },
  groups: {
    farm: { id: 'farm', type: GroupType.POSITION, label: 'Staked' },
    trove: { id: 'trove', type: GroupType.POSITION, label: 'Trove' },
    stabilityPool: { id: 'stability-pool', type: GroupType.POSITION, label: 'Stability Pool' },
  },
  tags: [AppTag.COLLATERALIZED_DEBT_POSITION],
  supportedNetworks: {
    [Network.AVALANCHE_MAINNET]: [AppAction.VIEW],
  },
  primaryColor: '#fff',
});

@Register.AppDefinition(TEDDY_CASH_DEFINITION.id)
export class TeddyCashAppDefinition extends AppDefinition {
  constructor() {
    super(TEDDY_CASH_DEFINITION);
  }
}

export default TEDDY_CASH_DEFINITION;
