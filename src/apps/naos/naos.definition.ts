import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const NAOS_DEFINITION = appDefinition({
  id: 'naos',
  name: 'NAOS Finance',
  description: `Earn competitive yield from income generating real world financial assets.`,
  links: {
    github: 'https://github.com/NAOS-Finance',
    twitter: 'https://twitter.com/naos_finance',
    discord: 'https://discord.com/invite/qThcuS7FBd',
    telegram: 'https://t.me/naos_finance',
    medium: 'https://naosfinance.medium.com/',
  },
  groups: {
    farm: { id: 'farm', type: GroupType.POSITION, label: 'Staking' },
  },
  url: 'https://naos.finance/',
  tags: [AppTag.LENDING],
  supportedNetworks: { [Network.ETHEREUM_MAINNET]: [AppAction.VIEW] },
});

@Register.AppDefinition(NAOS_DEFINITION.id)
export class NaosAppDefinition extends AppDefinition {
  constructor() {
    super(NAOS_DEFINITION);
  }
}
