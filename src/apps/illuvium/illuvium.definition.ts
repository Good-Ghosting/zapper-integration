import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const ILLUVIUM_DEFINITION = appDefinition({
  id: 'illuvium',
  name: 'Illuvium',
  description: `Illuvium is a collectible NFT RPG game and auto-battler rolled into one. There is an open-world RPG experience in the overworld, where you mine, harvest, capture, and fight Illuvials.`,
  url: 'https://www.illuvium.io/',
  links: {
    github: 'https://github.com/illuviumgame',
    twitter: 'https://twitter.com/illuviumio',
    discord: 'https://discord.com/invite/illuvium',
    telegram: 'https://t.me/illuvium',
    medium: 'https://medium.com/illuvium',
  },
  tags: [AppTag.GAMING],
  groups: {
    farm: { id: 'farm', type: GroupType.POSITION, label: 'Staked' },
    farmV2: { id: 'farm-v2', type: GroupType.POSITION, label: 'Staked' },
  },
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },
});

@Register.AppDefinition(ILLUVIUM_DEFINITION.id)
export class IlluviumAppDefinition extends AppDefinition {
  constructor() {
    super(ILLUVIUM_DEFINITION);
  }
}
