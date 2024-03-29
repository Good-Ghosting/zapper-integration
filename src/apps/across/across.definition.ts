import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const ACROSS_DEFINITION = appDefinition({
  id: 'across',
  name: 'across',
  description: 'Across is the fastest, cheapest and most secure cross-chain bridge.',
  url: 'https://across.to',
  groups: {
    pool: { id: 'pool', type: GroupType.TOKEN, label: 'Pool' },
  },
  tags: [AppTag.BRIDGE, AppTag.CROSS_CHAIN],
  links: {
    learn: 'https://docs.across.to/bridge/',
    github: 'https://github.com/across-protocol',
    twitter: '',
    telegram: '',
    discord: 'https://discord.gg/across',
    medium: '',
  },
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
    [Network.POLYGON_MAINNET]: [AppAction.VIEW],
    [Network.ARBITRUM_MAINNET]: [AppAction.VIEW],
    // [Network.BOBA_MAINNET]: [ProtocolAction.VIEW],
  },
  primaryColor: '#fff',
});

@Register.AppDefinition(ACROSS_DEFINITION.id)
export class AcrossAppDefinition extends AppDefinition {
  constructor() {
    super(ACROSS_DEFINITION);
  }
}

export default ACROSS_DEFINITION;
